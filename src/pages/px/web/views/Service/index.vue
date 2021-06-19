<template>
	<div class="swan-header">
		<div class="swan-contain-box">
			<img :src="logo" alt="" class="logo">
			<ul class="menu-box">
				<li v-for="item in menu" :key="item.name">
					<router-link :to="{path: item.url}">{{item.name}}</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import logo from '@/assets/img/logo.png'
	export default {
		name: 'Header',
		data () {
			return {
				logo: logo,
				menu: [{
					name: '首页',
					url: '/'
				}, {
					name: '案例',
					url: '/case'
				}, {
					name: '服务',
					url: '/service'
				}, {
					name: '关于',
					url: '/about'
				}, {
					name: '联系',
					url: '/contact'
				}]
			}
		}
	}
</script>
<style lang="scss" scoped>
	.swan-header {
		border-bottom: 1px solid rgba($color: #000, $alpha: .05);
		&>div {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 110px;
			padding-top: 30px;
			.logo {
				width: 116px;
				height: 30px;
			}
			.menu-box {
				display: flex;
				li {
					margin-left: 64px;
					font-size: 16px;
				}
			}
		}
	}
</style>
