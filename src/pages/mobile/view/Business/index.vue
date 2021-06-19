<template>
	<div class="swan-contain-box">
        <div class="head-title">与合作伙伴<br/>共同探索数字化体验设计的未来</div>
        <div class="case-item" v-for="(item, index) in serviceList" :key="item.id">
            <div class="case-item-2" :class="'item'+(index+1)"></div>
            <div class="case-item-1">
                <div class="large-title title">{{item.title}}</div>
                <div class="desc">{{item.desc}}</div>
                <div class="icon-box">
                    <div class="icon-item" v-for="(subItem, idx) in item.iconList" :key="idx" :class="'item'+(idx+1)">
                        <img :src="subItem.img" alt="">{{subItem.text}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
	import iconList from '@/config/business'
	export default {
        name: 'Service',
        data () {
            return {
                serviceList: [{
                    id: 1,
                    title: '品牌设计',
                    desc: '您将获得全面而实用的品牌指南，以创建集成的广告系列，营销网站和其他有用的东西。',
                    iconList: [{
                        text: 'LOGO设计',
                        img: iconList.item1_icon1
                    }, {
                        text: 'VI设计',
                        img: iconList.item1_icon2
                    }, {
                        text: 'H5设计',
                        img: iconList.item1_icon3
                    }, {
                        text: '插画设计',
                        img: iconList.item1_icon4
                    }]
                }, {
                    id: 2,
                    title: 'UI设计',
                    desc: '结合业务类型和品牌定位，提供精致、简洁有情感化的界面视觉呈现方式，让每一个像素都能承载设计匠心，提升产品的品质感。',
                    iconList: [{
                        text: '需求分析',
                        img: iconList.item2_icon1
                    }, {
                        text: '原型设计',
                        img: iconList.item2_icon2
                    }, {
                        text: 'APP设计',
                        img: iconList.item2_icon3
                    }, {
                        text: '网页设计',
                        img: iconList.item2_icon4
                    }, {
                        text: '小程序设计',
                        img: iconList.item2_icon4
                    }]
                }, {
                    id: 3,
                    title: '动效设计',
                    desc: '我们打造脱颖而出并讲述故事的品牌。它们是数字优先的，但也扎根于您的客户生活和工作的现实世界中。到达那里是一个协作过程，但是到最后，您将获得全面而实用的品牌指南，以创建集成的广告系列，营销网站和其他有用的东西。',
                    iconList: [{
                        text: '动态logo',
                        img: iconList.item3_icon1
                    }, {
                        text: '产品视频',
                        img: iconList.item3_icon2
                    }, {
                        text: 'Motion Graphics',
                        img: iconList.item3_icon3
                    }]
                }, {
                    id: 4,
                    title: '空间设计',
                    desc: '从探索分析中发掘体验价值，以用户使用场景为出发点，构建极致自然的交互体验设计方案。并结合业务类型和品牌定位，提供精致、简洁有情感化的界面视觉呈现方式，让每一个像素都能承载设计匠心，提升产品的品质感。',
                    iconList: [{
                        text: '展示设计',
                        img: iconList.item4_icon1
                    }, {
                        text: '3D建模',
                        img: iconList.item4_icon2
                    }]
                }]
            }
        }
	}
</script>
<style lang="scss" scoped>
	.head-title {
        margin: 97px 0 106px 0;
        @extend %largeTxt;
    }
    .case-item {
        // display: flex;
        // justify-content: space-between;
        // align-items: center;
        // &:nth-child(2n) {
        //     flex-direction: row-reverse;
        // }
        // margin-bottom: 300px;
        .case-item-1 {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            height: fit-content;
        }
        .title {
            margin: 50px 0 30px 0;
            @extend %largeTxt;
        }
        .desc {
            width: 100%;
            margin-bottom: 16px;
            @include fontSL(26px, 47px);
        }
        .icon-box {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            margin-bottom: 222px;
            padding: 0 12px;
            .icon-item {
                width: 120px;
                text-align: center;
                margin-right: 44px;
                margin-top: 54px;
                @include fontSL(24px, 33px);
                &:nth-child(4n) {
                    margin-right: 30px;
                }
                img {
                    display: block;
                    width: 38px;
                    height: 38px;
                    margin: 0 auto 27px;
                }
            }
        }
    }
    .case-item-2 {
        width: 670px;
        height: 946px;
        @for $i from 1 through 4 {
            &.item#{$i} {
                background: url('~@/assets/img/service#{$i}.png') no-repeat center center;
                background-size: 100% 100%;
            }
        }
    }
</style>
