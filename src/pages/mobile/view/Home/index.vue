<template>
    <div class="swan-contain-box">
        <div class="home-title large-title">我们是<br/><div>UI/UX和品牌设计工作室</div></div>
        <video class="home-video" autoplay="autoplay" controls="controls" :src="videoUrl"></video>
        <div class="large-title home-title we-can-do" @click="changePage('Business')">我们能做什么</div>
        <ul class="sign-box">
            <li v-for="(item, index) in signData" :key="item.name" :class="['item' + (index + 1)]">
                <div class="name">{{item.name}}</div>
                <div class="desc">{{item.desc}}</div>
            </li>
        </ul>
        <div class="sign-text">
            <span class="default-text">数字化产品设计</span>
            <span class="stroke-text">互联网品牌设计</span>
        </div>
        <div class="large-title works-title">作品案例</div>
        <Tag :tagData.sync="tagData"></Tag>
        <WorksList></WorksList>
        <div class="search-btn" v-if="!isMobile" @click="changePage('Case')">查看案例</div>
        <Aboutus class="aboutus-ma-t"></Aboutus>
        <div>
            <div class="large-title qa-title">常见问题</div>
            <QA></QA>
        </div>
        <div class="logo-wall-box">
            <div class="large-title wall-title">这些客户选择我们</div>
            <div class="logo-wall">
                <img :src="item" alt="" v-for="(item, index) in logowall" :key="index">
            </div>
        </div>
    </div>
</template>
<script>
    import Tag from '@/pages/mobile/components/tag'
    import WorksList from '@/pages/mobile/components/worksList'
    import QA from '@/pages/mobile/view/Home/components/qa'
    import Aboutus from '@/pages/mobile/components/abooutUs'
    import logo1 from '@/assets/img/logowall/logo1.png'
    import logo2 from '@/assets/img/logowall/logo2.png'
    import logo3 from '@/assets/img/logowall/logo3.png'
    import logo4 from '@/assets/img/logowall/logo4.png'
    import logo5 from '@/assets/img/logowall/logo5.png'
    import logo6 from '@/assets/img/logowall/logo6.png'
    import logo7 from '@/assets/img/logowall/logo7.png'
    import logo8 from '@/assets/img/logowall/logo8.png'
    import { homeVideo, webcustomer } from '@/apis/web'
    export default {
        name: 'mobileHome',
        components: {
            Tag,
            WorksList,
            QA,
            Aboutus
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
                // logowall: [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8]
                logowall: []
            }
        },
        methods: {
            changePage (name) {
                this.$router.push({name: name})
            },
            async getList () {
                const [err, res] = await webcustomer()
                if (!err) {
                    res.body.forEach((item, idx) => {
                        this.logowall.push(item.logo)
                    })
                }
            }
        },
        async created () {
            const [err, res] = await homeVideo()
            if (!err) {
                this.videoUrl = res.body?.url
            }
            this.getList()
        }
	}
</script>
<style lang="scss" scoped>
    .home-video {
        width: 100%;
        margin-top: 193px;
    }
    .item-title {
        margin-top: 300px;
    }
    .sign-box {
        display: flex;
        justify-content: space-between;
        padding: 0 39px;
        margin-top: 165px;
        box-sizing: border-box;
        li {
            width: 206px;
            padding-top: 189px;
            text-align: center;
            @for $i from 1 through 4 {
                &.item#{$i} {
                    background: url('~@/assets/img/sign#{$i}.png') no-repeat top center;
                    background-size: 108px 108px;
                }
            }
            .name {
                font-size: 22px;
                line-height: 33px;
                color: #000;
            }
            .desc {
                margin-top: 14px;
                font-size: 16px;
                line-height: 26px;
                color: #999;
            }
        }
    }
    .sign-text {
        margin: 429px 0 445px 0;
        %signtext {
            font-size: 75px;
            line-height: 106px;
        }
        .default-text {
            color: #000;
            @extend %signtext;
        }
        .stroke-text {
            margin-left: 118px;
            color: #fff;
            @extend %signtext;
            text-shadow: #000 1px 0 0, #000 0 1px 0, #000 -1px 0 0, #000 0 -1px 0;
        }
    }
    .large-title  {
        margin-bottom: 172px;
    }
    .search-btn {
        width: 203px;
        height: 64px;
        border-radius: 41px;
        border: 2px solid #ECECEC;
        margin: -43px auto 0;
        font-size: 16px;
        line-height: 22px;
        text-align: center;
        line-height: 64px;
    }
    .aboutus-ma-t {
        margin-top: 300px;
    }
    .qa-title {
        margin: 300px 0 153px 0;
    }
    .logo-wall-box {
        margin-top: 176px;
        margin-bottom: 134px;
        .wall-title {
            margin-bottom: 175px;
        }
        .logo-wall {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            img {
                width: 200px;
                height: 60px;
                margin: 0 50px 117px 50px;
            }
        }
    }
	/***
	* --------------手机样式---------------
	*/
	.home-title {
        margin-top: 97px;
        @extend %largeMobileTxt;
        div {
            margin-top: 12px;
        }
    }
    .home-video {
        margin-top: 106px;
    }
    .we-can-do {
        margin-top: 146px;
    }
    .sign-box {
        display: block;
        padding: 0 23px;
        margin-top: 126px;
        li {
            width: auto;
            height: 108px;
            padding: 0 0 0 155px;
            margin-bottom: 126px;
            text-align: left;
            background-position: left top !important;
            .name {
                padding: 9px 0 8px 0;
                @include fontSL(36px, 50px);
            }
            .desc {
                margin: 0;
                @include fontSL(26px, 40px);
            }
        }
    }
    .sign-text {
        margin: 283px 0 259px 0;
        .default-text {
            margin-top: 283px;
            font-weight: bold;
            text-decoration: underline;
            @include fontSL(80px, 112px);
        }
        .stroke-text {
            display: block;
            color: #000;
            margin: 128px 0 0 0;
            font-weight: bold;
            text-shadow: initial;
            text-decoration: underline;
            @include fontSL(80px, 112px);
        }
    }
    .works-title {
        margin-bottom: 90px;
    }
    .aboutus-ma-t {
        margin-top: 98px;
    }
    .qa-title {
        margin: 228px 0 122px 0;
    }
	.logo-wall-box {
        margin-top: 228px;
        margin-bottom: 141px;
        .wall-title {
            margin-bottom: 114px;
        }
        .logo-wall {
			justify-content: start;
            img {
                height:	70px;
                margin: 0 35px 90px 0;
				&:nth-child(3n) {
					margin-right: 0;
				}
            }
        }
    }
</style>
