<template>
    <div class="swan-contain-box"  :class="{mounted:isMounted}">
        <div class="home-title">
            <div class="large-title">数字化产品设计专家</div>
            <div class="title-desc">Swan是一家专业的设计机构，专注于高质量的网站、移动端界面和品牌形象的设计</div>
        </div>
        <video class="home-video" autoplay="autoplay" controls="controls" :src="videoUrl"></video>
        <div class="we-can-do we-can-do-title" :class="[isSignshow?'title_sign_show':'']" @click="changePage('Business')">我们能做什么</div>
        <div class="sign-contain" :class="[isSignshow?'sign_show':'']">
            <ul class="sign-box">
                <li v-for="(item, index) in signData" :key="item.name" :class="['item' + (index + 1)]">
                    <div class="name">{{item.name}}</div>
                    <div class="desc">{{item.desc}}</div>
                </li>
            </ul>
        </div>
        <div class="search-btn" :class="[isSearchBtnShow?'search_btn_show':'']">探索我们的服务</div>
        <div class="we-can-do works-title" :class="[isWorkTitleShow?'works_title_show':'']">共同探索数字化体验设计的未来</div>
        <WorksList></WorksList>
        <div class="search-btn more" :class="[isCaseShow?'case_btn_show':'']" @click="changePage('Case')">查看案例</div>
        <div class="sign-text">
            <div class="sign-title">我们能实现</div>
            <VideoBg :list="textlistData" @click="changePage('Business')"></VideoBg>
        </div>
        <!---<Aboutus class="aboutus-ma-t"></Aboutus>--->
        <div>
            <div class="we-can-do qa-title">常见问题</div>
            <QA></QA>
        </div>
        <div class="logo-wall-box">
            <div class="we-can-do wall-title">这些客户选择我们</div>
            <div class="logo-wall"  v-for="(item, index) in logowall" :key="index" :class="[isLogoShow?'logo_wall_show':'']">
                <img :src="sitem" alt="" v-for="(sitem, idx) in item" :key="idx" :class="['item' + ((index*4) + (idx + 1))]">
            </div>
        </div>
    </div>
</template>
<script>
    // import Tag from '@/pages/px/web/components/tag'
    import VideoBg from '@/pages/px/web/components/videobg'
    import WorksList from '@/pages/px/web/components/worksList'
    import QA from '@/pages/px/web/views/Home/components/qa'
    // import Aboutus from '@/pages/px/web/components/abooutUs'
    import logo1 from '@/assets/img/logowall/logo1.png'
    import logo2 from '@/assets/img/logowall/logo2.png'
    import logo3 from '@/assets/img/logowall/logo3.png'
    import logo4 from '@/assets/img/logowall/logo4.png'
    import logo5 from '@/assets/img/logowall/logo5.png'
    import logo6 from '@/assets/img/logowall/logo6.png'
    import logo7 from '@/assets/img/logowall/logo7.png'
    import logo8 from '@/assets/img/logowall/logo8.png'
    import { scrollTop } from '@/utils'
    import { homeVideo, webcustomer } from '@/apis/web'
    export default {
        name: 'mobileHome',
        components: {
            WorksList,
            QA,
            // Aboutus,
            VideoBg
        },
        data () {
            return {
                videoUrl: '',
                signData: [{
                    name: '品牌设计',
                    desc: '以品牌价值为原则，帮助品牌提炼自身优势'
                }, {
                    name: 'UI设计',
                    desc: '多维度分析产品设想，打造全新的人机交互界面'
                }, {
                    name: '动效设计',
                    desc: '丝滑般的体验，赋予品牌全新的视觉认知'
                }, {
                    name: '三维空间设计',
                    desc: '量身定制的创意方案，提升企业的展示形象'
                }],
                tagData: [{
                    text: '全部作品'
                }, {
                    text: 'UI设计'
                }, {
                    text: '标志设计'
                }, {
                    text: '动效设计'
                }, {
                    text: '空间设计'
                }],
                textlistData: [{
                    text: '品牌',
                    href: 'http://www.c9-d.com/videos/covers/corona.mp4'
                }, {
                    text: '应用',
                    href: 'http://www.c9-d.com/videos/covers/indeco.mp4'
                }, {
                    text: '网站',
                    href: 'http://www.c9-d.com/videos/covers/xinniankaiyunqian.mp4'
                }],
                // logowall: [[logo1, logo2, logo3, logo4], [logo5, logo6, logo7, logo8]],
                logowall: [],
                isMounted: false,
                isShowWecan: false,
                isSignshow: false,
                isSearchBtnShow: false,
                isWorkTitleShow: false,
                isCaseShow: false,
                isLogoShow: false
            }
        },
        methods: {
			scrollChange (params) {
				const sctop = scrollTop()
                if (sctop >= 720) this.isShowWecan = true
                if (sctop >= 700) this.isSignshow = true
                if (sctop >= 1100) this.isSearchBtnShow = true
                if (sctop >= 1280) this.isWorkTitleShow = true
                if (sctop >= 2880) this.isCaseShow = true
                if (sctop >= 4056) this.isLogoShow = true
			},
            changePage (name) {
                this.$router.push({name: name})
            },
            async getList () {
                const [err, res] = await webcustomer()
                if (!err) {
                    const arr = []
                    res.body.forEach((item, idx) => {
                        if (idx % 4 === 0) {
                            arr.push([])
                        }
                        arr[arr.length - 1].push(item.logo)
                    })
                    this.logowall = arr
                }
            }
		},
        async created () {
            const [err, res] = await homeVideo()
            if (!err) {
                this.videoUrl = res.body.url
            }
            this.getList()
        },
		mounted () {
            window.addEventListener('scroll', this.scrollChange, false)
            setTimeout(() => {
                this.isMounted = true
            })
		},
		destroyed () {
			window.removeEventListener('scroll', this.scrollChange, false)
		}
	}
</script>
<style lang="scss" scoped>
	.home-title {
        margin-top: 132px;
        .large-title, .title-desc {
            @include ani(.5s, 30px);
        }
        .title-desc {
            @include fontSL(20px, 44px);
            margin-top: 20px;
        }
    }
    .home-video {
        width: 100%;
        margin-top: 98px;
        @include ani(.9s, 20px);
        &:hover {
            transform: scale(1.1);
        }
    }
    .we-can-do {
        margin-top: 151px;
        word-break: keep-all;
        @include fontSL(48px, 67px);
        text-align: center;
        &.we-can-do-title {
            @include ani(.3s, 20px);
            font-size: 60px;
            font-weight: 500;
        }
    }
    .item-title {
        margin-top: 300px;
    }
    .sign-contain {
        width: 1200px;
        overflow: hidden;
        transition: width 3s;
    }
    .sign-box {
        display: flex;
        justify-content: space-between;
        width: 1200px;
        padding: 0 39px;
        margin-top: 102px;
        margin-bottom: 79px;
        box-sizing: border-box;
        li {
            width: 206px;
            padding-top: 189px;
            text-align: center;
            @include ani(.5s, 30px);
            transition-delay: .3s;
            @for $i from 1 through 4 {
                &.item#{$i} {
                    background: url('~@/assets/img/sign#{$i}.png') no-repeat top center;
                    background-size: 108px 108px;
                }
            }
            .name {
                font-size: 30px;
                line-height: 33px;
                color: #000;
                @include ani(.5s, 30px);
                transition-delay: .5s;
            }
            .desc {
                margin-top: 14px;
                font-size: 18px;
                line-height: 26px;
                color: #999;
                @include ani(.5s, 30px);
                transition-delay: .7s;
            }
        }
    }
    .sign-text {
        margin: 219px 0 334px 0;
        .sign-title {
            @include fontSL(24px, 48px);
        }
    }
    .works-title {
        margin: 127px 0 60px 0;
        @include ani(.3s, 30px);
        transition-delay: .2s;
    }
    .search-btn {
        width: 203px;
        height: 64px;
        border-radius: 41px;
        border: 1px solid #D5D7DC;
        margin: 0 auto 0;
        font-size: 18px;
        text-align: center;
        line-height: 64px;
        cursor: pointer;
        transition-delay: .2s;
        @include ani(.3s, 30px);
        &.more {
            margin-top: -43px;
        }
        &:hover {
            color: #fff;
            background: #000;
        }
    }
    .aboutus-ma-t {
        margin-top: 334px+121px;
    }
    .qa-title {
        margin: 405px 0 75px 0;
    }
    .logo-wall-box {
        margin-top: 176px;
        margin-bottom: 134px;
        .wall-title {
            margin-bottom: 111px;
        }
        .logo-wall {
            display: flex;
            justify-content: space-between;
            align-items: center;
            img {
                width: 200px;
                margin: 0 50px 117px 50px;
                @include ani(.8s, 30px);
                @for $i from 1 through 8 {
                    &.item#{$i} {
                        transition-delay: $i * .1s;
                    }
                }
            }
        }
    }
    .mounted {
        .home-title {
            .large-title, .title-desc {
                transform: translateY(0);
                opacity: 1;
            }
            .title-desc {
                transition-delay: .2s;
            }
        }
        .home-video {
            transform: translateY(0);
            opacity: 1;
        }
    }
    .title_sign_show {
        @extend %show;
    }
    .sign_show .sign-box li {
        @extend %show;
        .name, .desc {
            @extend %show;
        }
    }
    .search_btn_show, .works_title_show, .case_btn_show {
        @extend %show;
    }
    .logo_wall_show img {
        @extend %show;
    }
</style>
