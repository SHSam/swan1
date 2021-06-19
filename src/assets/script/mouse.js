const domMethods = {
  // 当前this为dom节点
  addClass (newClass) {
    if (this.className.indexOf(newClass) > 0) return
    this.className += ` ${newClass}`
  },
  removeClass (className) {
    this.className = this.className.replace(new RegExp(` ${className}`, 'g'), '')
  },
  css (css) {
    this.el.style = css
  }
}

export const mouseVideo = {
  elClassName: 'text-box',
  el: null,
  videoBoxEl: null,
  videoDiv: null,
  enterFlag: false,
  textEnterFlag: false,
  timer1: null,
  timer2: null,
  zIndex: 1,
  init () {
    this.el = Array.from(document.getElementsByClassName(this.elClassName))
    this.videoBoxEl = document.getElementsByClassName('cb-cursor-media')[0]
    this.videoDiv = this.videoBoxEl?.childNodes[0]?.childNodes[0]
    this.ergodicNode()
  },
  ergodicNode () {
    let videoStr = ''
    this.el.forEach((item, idx) => {
      this.enter(item, idx)
      this.leave(item, idx)
      videoStr += this.createVideo(item.getAttribute('data-src'))
    })
    this.videoDiv.innerHTML = videoStr
  },
  createVideo (url) {
    return `<video preload="auto" muted loop autoplay src="${url}"></video>`
  },
  enter (item, idx) {
    item.onmouseenter = () => {
      this.enterFlag = true
      this.videoShow(idx)
      mouse.el.addClass('-media')
    }
    item.childNodes[1].onmouseenter = () => {
      this.textEnterFlag = true
      mouse.el.addClass('-media-lg -media-blend -pointer')
    }
  },
  leave (item, idx) {
    item.onmouseleave = () => {
      mouseVideo.enterFlag = false
      this.timer1 && clearTimeout(this.timer1)
      this.videoHide(idx)
      this.timer1 = setTimeout(() => {
        if (!mouseVideo.enterFlag) mouse.el.removeClass('-media')
      }, 0)
    }
    item.childNodes[1].onmouseleave = () => {
      mouseVideo.textEnterFlag = false
      this.timer2 && clearTimeout(this.timer2)
      this.timer2 = setTimeout(() => {
        if (!mouseVideo.textEnterFlag) mouse.el.removeClass('-media-lg -media-blend -pointer')
      }, 0)
    }
  },
  videoShow (idx) {
    this.videoDiv.childNodes[idx].currentTime = 0
    this.videoDiv.childNodes[idx].style.zIndex = '1'
  },
  videoHide (idx) {
    this.videoDiv.childNodes[idx].style.zIndex = '0'
  }
}

export const menu = {
  vnode: null, // 菜单节点集合
  k: 0.8, // 弹性系数
  l: 80, // 偏移最大距离
  init () {
    this.vnode = Array.from(document.getElementsByClassName('menu_box'))
    this.ergodicNode()
  },
  ergodicNode () {
    this.vnode.forEach(item => {
      this.enter(item)
    })
  },
  enter (item) {
    item.onmouseenter = () => {
      this.move(item)
      mouse.el.addClass('-menu -pointer')
    }
  },
  move (item) {
    document.onmousemove = (e) => {
      const halfOffsetW = item.offsetWidth / 2
      const halfOffsetH = item.offsetHeight / 2
      const centerL = item.offsetLeft + halfOffsetW
      const centerT = item.offsetTop + halfOffsetH
      const mouseMoveWithCenterX = e.clientX - centerL
      const mouseMoveWithCenterY = e.clientY - centerT
      const l = (1 - this.k) * mouseMoveWithCenterX
      const t = (1 - this.k) * mouseMoveWithCenterY
      mouse.el.style.transform = `translate3d(${centerL + l}px, ${centerT + t}px, 0px)`
      if (Math.abs(mouseMoveWithCenterX) - halfOffsetW > this.l || Math.abs(mouseMoveWithCenterY) - halfOffsetH > this.l) {
        this.leave()
      }
    }
  },
  leave () {
    mouse.move()
    mouse.el.removeClass('-menu -pointer')
  }
}

const mouse = {
  el: null,
  clientX: 0,
  clientY: 0,
  init (el) {
    this.el = el
    Object.assign(this.el.__proto__, domMethods)
    menu.init()
    mouseVideo.init()
    this.enter()
    this.move()
    this.leave()
  },
  enter () {
    document.onmouseenter = ({ clientX, clientY }) => {
      this.el.addClass('-visible')
      this.el.style.transform = `translate3d(${clientX}px, ${clientY}px, 0px)`
    }
  },
  move () {
    document.onmousemove = ({ clientX, clientY }) => {
      this.el.style.transform = `translate3d(${clientX}px, ${clientY}px, 0px)`
    }
  },
  leave () {
    document.onmouseleave = () => {
      this.el.removeClass('-visible')
    }
  }
}

export default mouse
