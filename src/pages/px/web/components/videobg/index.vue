<template>
    <div class="ani-box">
        <div class="text-box" v-for="(item, index) in list" :key="index" :data-src="item.href" :class="[isTextShow?'text_show':'', 'item' + (index + 1)]">
          <div class="point-video"></div>
          <a class="box" href="/">
              <span class="stroke-text">{{item.text}}</span>
          </a>
        </div>
    </div>
</template>

<script>
import { scrollTop } from '@/utils'
export default {
  name: 'VideoBg',
  props: {
    list: Array
  },
  data () {
    return {
      isTextShow: false
    }
  },
  methods: {
    scrollChange (params) {
      const sctop = scrollTop()
      if (sctop >= 3210) this.isTextShow = true
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollChange, false)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollChange, false)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.ani-box {
  position: absolute;
  display: flex;
  margin-top: 61px;
  z-index: 2;
}
.text-box {
  position: relative;
  width: fit-content;
  height: fit-content;
  padding-right: 153px;
  @include ani(.9s, 50px);
  @for $i from 1 through 4 {
      &.item#{$i} {
          transition-delay: $i * .2s;
      }
  }
}
.text-box.text_show {
  @extend %show;
}
%signtext {
    font-size: 120px;
    line-height: 106px;
}
.default-text {
    color: #000;
    @extend %signtext;
}
.stroke-text {
    color: #fff;
    @extend %signtext;
    text-shadow: #000 1px 0 0, #000 0 1px 0, #000 -1px 0 0, #000 0 -1px 0;
    word-break: keep-all;
    transition: all .5s;
    font-weight: bold;
    z-index: 9;
    &:hover {
        color: #000;
    }
}
.point-video {
  position: relative;
}
.point-video::before {
  content: "";
    display: block;
    position: absolute;
    top: -50px;
    bottom: -50px;
    left: 0;
    right: 0;
}
  span {
    font-size: 60px;
    // font-weight: bold;
    /* position: absolute; */
    top: 400px;
    left: 400px;
    /* background-blend-mode: normal; */
    /* color: transparent; */
    text-shadow: none;
    -webkit-text-stroke: 1px #000;
    /* text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; */
    /* text-shadow: none; */
  }
  a {
    display: inline-block;
    position: relative;
    z-index: 9;
    padding: 6px 11px;
    overflow: hidden;
    font-size: 38px;
    // font-weight: 600;
    line-height: 47px;
    letter-spacing: -.05em;
    text-decoration: none;
    color: #000;
  }
  .box:hover {
    -webkit-text-stroke: 1px transparent;
  }
</style>
