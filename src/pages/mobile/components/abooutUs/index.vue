<template>
	<div class="about-us-box" :class="['type'+type]">
		<div class="text">
			<div class="desc">Swan Design是一家以创新设计和体验服务为核心的设计机构，专注于用设计思维为初创、知名企业塑造线上线下全维度品牌视觉形象。提供品牌视觉定位，VI，官网，UIUX 等设计服务，建立了从体验策略到设计与实现的完整服务体系。</div>
			<span class="title" v-if="!isMobile&&isShowAbout">关于我们</span>
		</div>
		<div class="num num1">
			<img :src="num1" alt="">
			<div class="txt">设计师</div>
		</div>
		<div class="num num2">
			<img :src="num2" alt="">
			<div class="txt">成立时间</div>
		</div>
		<div class="about-us-txt" v-if="isMobile&&isShowAbout">关于我们</div>
	</div>
</template>
<script>
    import num1 from '@/assets/img/num1.png'
    import num2 from '@/assets/img/num2.png'
	export default {
		name: 'Aboutus',
		props: {
			isShowAbout: {
				type: Boolean,
				default: true
			},
			type: {
				type: Number,
				default: 1
			}
		},
		data () {
			return {
                num1,
                num2
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import '@/pages/mobile/assets/style/aboutus.scss';
	.about-us-box {
        display: flex;
		&.type2 {
			.text {
				.desc {
					font-size: 26px;
				}
			}
			.num {
				margin-top: 24px;
			}
		}
        .text {
            margin-right: 145px;
            .desc {
                width: 600px;
                font-size: 22px;
                line-height: 52px;
                color: #000;
            }
            .title {
                margin-top: 33px;
                font-size: 24px;
                line-height: 33px;
                padding-bottom: 5px;
                border-bottom: 3px solid #333;
            }
        }
        .num {
            margin-top: 42px;
            text-align: center;
            &:last-child{
                margin-left: 196px;
            }
            img {
                height: 140px;
            }
            .txt {
                margin-top: 51px;
                font-size: 16px;
                line-height: 22px;
                color: #999;
            }
        }
    }
</style>
