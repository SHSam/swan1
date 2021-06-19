<template>
	<div class="works-list">
        <div class="works-item" v-for="(item, index) in worksData" :key="index" @click="goDetail(item)">
            <!-- <img :src="'@/assets/img/works'+ (index + 1) + '.png'" alt=""> -->
            <img :src="item.smallCover" alt="">
            <div class="subText">{{item.svcType}}</div>
            <div class="name">{{item.name}}</div>
        </div>
    </div>
</template>
<script>
    import { webcaseList } from '@/apis/web'
	export default {
        name: 'WorksList',
        data () {
            return {
                worksData: []
            }
        },
        methods: {
            goDetail (item) {
                this.$router.push({ name: 'CaseDetail', query: { id: item.caseId } })
            }
        },
        async created () {
            const [err, res] = await webcaseList()
            if (!err) {
                this.worksData = res.body.records
            }
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
        width: 100%;
        margin-bottom: 100px;
        img {
            width: 100%;
            height: 631px;
        }
        .subText {
            margin-top: 36px;
            @include fontSL(24px, 33px);
            color: #919191;
        }
        .name {
            margin-top: 15px;
            @include fontSL(32px, 45px);
            color: #444;
        }
    }
</style>
