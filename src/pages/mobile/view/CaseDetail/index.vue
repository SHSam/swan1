<template>
	<div>
        <div class="swan-contain-box large-title">{{info.title}}<br/>{{svcType}}</div>
        <div class="banner">
            <img :src="info.maxCover" alt="">
        </div>
        <div class="swan-contain-box">
            <div class="desc-box">
                <div class="desc-title">{{info.title}}</div>
                <div class="desc-content">
                    <span>{{info.caseDesc}}</span>
                    <!---<div class="desc-link">立即前往</div>--->
                </div>
            </div>
            <div class="img-item" v-html="info.content"></div>
        </div>
    </div>
</template>
<script>
	import { webCaseDetail } from '@/apis/web'
	export default {
        name: 'CaseDetail',
        data () {
            return {
                info: {},
                svcType: '',
                typeObj: {
                    GD: '平面设计',
                    APP: 'APP设计',
                    WEB: '网页设计',
                    H5: 'H5设计',
                    BI: '品牌形象',
                    SD: '空间设计',
                    VD: '动效设计',
                    ILD: '插画设计'
                }
            }
        },
        async created () {
            const [err, res] = await webCaseDetail(this.$route.query.id)
            if (!err) {
                this.info = res.body
                const arr = res.body.svcType.split(',')
                let str = ''
                for (let k of arr) {
                    str += `${this.typeObj[k]} /`
                }
                this.svcType = str.replace(/\/$/, '')
            }
        }
	}
</script>
<style lang="scss">
.img-item {
    p {
        img {
            max-width: 100%;
        }
    }
}
</style>
<style lang="scss" scoped>
	.large-title {
        margin-top: 108px;
    }
    .banner {
        margin-top: 149px;
        img {
            width: 100%;
        }
    }
    .desc-box {
        margin: 100px 0 111px 0;
        .desc-title {
            color: #000;
            @include fontSL(36px, 50px);
        }
        .desc-content {
            margin-top: 42px;
            color: #000;
            @include fontSL(30px, 42px);
        }
        .desc-link {
            width: fit-content;
            margin-top: 33px;
            @include fontSL(22px, 30px);
            color: #000;
            padding-bottom: 7px;
            border-bottom: 2px solid #000;
            &.grey {
                color: #D6D6D6;
                border-color: #D6D6D6;
            }
        }
    }
    .img-item {
        width: 100%;
        background: #999;
        margin-bottom: 85px;
        &:last-child {
            margin-bottom: 202px;
        }
    }
</style>
