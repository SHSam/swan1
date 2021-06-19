<template>
	<div class="works-list" ref="worklist">
        <div class="works-item" v-for="(item, index) in worksData" :key="index" @click="goDetail(item)">
            <!-- <img :src="'@/assets/img/works'+ (index + 1) + '.png'" alt=""> -->
            <div class="impose-box" :class="{isShow: item.isShow}">
                <div class="img-box" :class="{isShow: item.isShow,'delay':item.isDelay}">
                    <img :src="item.isGif?item.gifCover:item.smallCover" alt="" @mouseover="gomouseover(item)" @mouseout="gomouseout(item)">
                    <img class="hide-img" :src="item.gifCover" alt="">
                </div>
            </div>
            <div class="item-text-box" :class="{isShow: item.isShow}">
                <div class="name">{{item.title}}</div>
                <div class="subText">{{item.svcType}}</div>
            </div>
        </div>
    </div>
</template>
<script>
    // import img1 from '@/assets/img/case/1.1.png'
    // import img1gif from '@/assets/img/case/1.gif'
    // import img2 from '@/assets/img/case/2.1.png'
    // import img2gif from '@/assets/img/case/2.gif'
    // import img3 from '@/assets/img/case/3.1.png'
    // import img3gif from '@/assets/img/case/3.gif'
    // import img4 from '@/assets/img/case/4.1.png'
    // import img4gif from '@/assets/img/case/4.gif'
    import { scrollTop } from '@/utils'
    import { webcaseList } from '@/apis/web'
	export default {
        name: 'WorksList',
        data () {
            return {
                // worksData: [{
                //     name: '今日头条  |  颠覆价格',
                //     subText: '品牌与产品策略',
                //     url: img1,
                //     gif: img1gif,
                //     isGif: false,
                //     isDelay: true,
                //     isShow: false
                // }, {
                //     name: '今日头条  |  颠覆价格',
                //     subText: '品牌与产品策略',
                //     url: img2,
                //     gif: img2gif,
                //     isGif: false,
                //     isDelay: true,
                //     isShow: false
                // }, {
                //     name: '今日头条  |  颠覆价格',
                //     subText: '品牌与产品策略',
                //     url: img3,
                //     gif: img3gif,
                //     isGif: false,
                //     isDelay: true,
                //     isShow: false
                // }, {
                //     name: '今日头条  |  颠覆价格',
                //     subText: '品牌与产品策略',
                //     url: img4,
                //     gif: img4gif,
                //     isGif: false,
                //     isDelay: true,
                //     isShow: false
                // }],
                worksData: []
            }
        },
        methods: {
            gomouseover (item) {
                item.isGif = true
            },
            gomouseout (item) {
                item.isGif = false
            },
            scrollChange (params) {
                const sctop = scrollTop()
                const b = this.$refs.worklist.offsetTop
                for (let i = 0; i < this.worksData.length; i += 2) {
                    if (sctop > b - 800 + i / 2 * 700) {
                        this.worksData[i].isShow = true
                        this.worksData[i + 1].isShow = true
                        setTimeout(() => {
                            this.worksData[i + 1].isDelay = false
                        }, 800)
                    }
                }
			},
            goDetail (item) {
                this.$router.push({ name: 'CaseDetail', query: { id: item.caseId } })
            }
        },
        async created () {
            const [err, res] = await webcaseList()
            if (!err) {
                console.log(res)
                for (const k of res.body.records) {
                    k.isGif = false
                    k.isDelay = true
                    k.isShow = false
                }
                this.worksData = res.body.records
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
<style lang="scss" scoped>
	.works-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 79px;
    }
    .works-item {
        width:486px;
        margin-bottom: 80px;
        cursor: pointer;
        &:nth-child(2n) {
            .img-box.delay {
                transition-delay: .4s;
            }
        }
        .impose-box {
            display: flex;
            justify-content: center;
            align-items: center;
            width:486px;
            height: 600px;
            transform: translate(0, 80px);
            transition: all 2s;
            &.isShow {
                transform: translate(0, 0);
            }
        }
        .item-text-box {
            transform: translate(0, 20px);
            transition: all .8s ease-out;
            transition-delay: 1s;
            &.isShow {
                transform: translate(0, 0);
            }
        }
        .img-box {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 340px;
            height: 420px;
            transition: all .4s ease-out;
            overflow: hidden;
            opacity: 0;
            &.isShow {
                width:486px;
                height: 600px;
                opacity: 1;
                transform: translate(0, 0);
            }
            &:hover {
                transition-delay: 0 !important;
                transform: scale(1.05) !important;
            }
        }
        img {
            width: 100%;
            height: 100%;
            min-width:486px;
            min-height: 600px;
            transition: all .8s;
            &.isShow {
                transform: scale(1);
            }
        }
        .subText {
            margin-top: 12px;
            font-size: 22px;
            line-height: 33px;
            color: #919191;
        }
        .name {
            margin-top: 24px;
            font-size: 26px;
            font-weight: 700;
            line-height: 25px;
            color: #444;
        }
        .hide-img {
            display: none;
        }
    }
</style>
