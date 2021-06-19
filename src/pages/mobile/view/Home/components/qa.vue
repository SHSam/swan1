<template>
	<div>
        <div class="qa-box" v-for="(item, index) in list" :class="[item.isShow?'show':'']" :key="index">
            <div class="qa-item-title">{{item.title}}<span class="arrow" :class="[item.isShow?'arrow-down':'arrow-up']" @click="toggle(item)">+</span></div>
            <div class="qa-answer" :class="[item.isShow?'':'hide']">{{item.content}}</div>
        </div>
    </div>
</template>
<script>
import { webFaq } from '@/apis/web'
	export default {
        name: 'QA',
        data () {
            return {
                list: []
            }
        },
        methods: {
            toggle (item) {
                item.isShow = !item.isShow
            }
        },
        async created () {
            require('@/pages/mobile/assets/style/qa.scss')
            const [err, res] = await webFaq()
            if (!err) {
                for (const k of res.body) {
                    k.isShow = false
                }
                this.list = res.body
            }
        }
	}
</script>
<style lang="scss" scoped>
.arrow {
        user-select: none;
    }
    .qa-box {
        margin-bottom: 42px;
        border: 2px solid #D5D7DC;
        padding: 20px 27px;
        transition: all .3s;
        &.show {
            background: #1E1E1E;
            .qa-item-title {
                color: #fff;
            }
            .qa-answer {
                color: #909090;
            }
        }
    }
	.qa-item-title {
        display: flex;
        align-items: center;
        @include fontSL(30px, 42px);
        span {
            margin-left: 12px;
        }
    }
    .qa-answer {
        max-height: 100px;
        margin-top: 30px;
        @include fontSL(20px, 37px);
        transition: all .7s;
        opacity: 1;
        &.hide {
            max-height: 0;
            opacity: 0;
            overflow: hidden;
            margin: 0;
        }
    }
</style>
