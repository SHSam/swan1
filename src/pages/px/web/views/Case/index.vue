<template>
	<div class="case swan-contain-box">
		<div class="head-title">与合作伙伴<br/>共同探索数字化体验设计的未来</div>
		<Tag :tagData.sync="tagData"></Tag>
		<WorksList class="ma-t63"></WorksList>
	</div>
</template>
<script>
	import Tag from '@/pages/px/web/components/tag'
	import WorksList from '@/pages/px/web/components/worksList'
	export default {
		name: 'Case',
		components: { Tag, WorksList },
		data () {
			return {
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
                }]
			}
		}
	}
</script>
<style lang="scss" scoped>
	.case {
		.head-title {
			margin: 105px 0 300px 0;
			@extend %largeTxt;
		}
	}
	.ma-t63 {
		margin-top: 63px;
	}
</style>
