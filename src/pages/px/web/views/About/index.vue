<template>
	<div class="about">
        <div class="title swan-contain-box">数字体验与<br/>品牌设计专家</div>
        <div class="img-wall"></div>
        <div class="swan-contain-box">
            <div class="large-title about-title">我们是</div>
            <Aboutus class="ma-t50" :isShowAbout="false" :type="2"></Aboutus>
            <div class="we-can">
                <div class="large-title">我们能</div>
                <div class="desc">我们帮助企业制定用户体验策略，为用户创造精彩的数字体验，并通过品牌设计与用户建立情感的连接，用设计驱动商业策略的成功。</div>
            </div>
        </div>
    </div>
</template>
<script>
    import Aboutus from '@/pages/px/web/components/abooutUs'
	export default {
        name: 'About',
        components: {
            Aboutus
        }
	}
</script>
<style lang="scss" scoped>
	.about {
        .title {
            margin-top: 136px;
            @include fontSL(70px, 98px);
            color: #000;
        }
        .img-wall {
            height: 576px;
            margin-top: 174px;
            background: url(~@/assets/img/about.png) no-repeat 146px center;
            background-size: auto 100%;
        }
        .about-title {
            margin-top: 233px;
        }
        .ma-t50 {
            margin-top: 50px;
        }
        .we-can {
            height: 581px;
            padding-top: 115px;
            padding-left: 650px;
            box-sizing: border-box;
            margin: 294px -0 250px 0;
            background: url(~@/assets/img/chair.png) no-repeat center left;
            background-size: auto 100%;
            .desc {
                margin-top: 50px;
                @include fontSL(26px, 56px);
                color: #000;
            }
        }
    }
</style>
