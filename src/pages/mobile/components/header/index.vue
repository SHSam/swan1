<template>
	<div class="swan-header">
		<div class="swan-contain-box">
			<router-link :to="{path: '/home'}"><img :src="logo" alt="" class="logo"></router-link>
			<div class="menu-content" @click="show">
			</div>
			<ul class="menu-box" v-if="menuShow" @click.stop>
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
				menuShow: false,
				logo: logo,
				menu: [{
					name: '首页',
					url: '/'
				}, {
					name: '案例',
					url: '/case'
				}, {
					name: '服务',
					url: '/business'
				}, {
					name: '关于',
					url: '/about'
				}, {
					name: '联系',
					url: '/contact'
				}]
			}
		},
		watch: {
			$route() {
				this.menuShow = false
			}
		},
		methods: {
			show () {
				this.menuShow = true
				document.addEventListener('click', this.close)
			},
			close (e) {
				if (e.target.className.includes('menu-content')) return
				this.menuShow = false
				document.removeEventListener('click', this.close)
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
				transition: opacity .3s;
				&:hover {
					opacity: .6;
				}
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
	.swan-header {
		&> div {
			padding: 60px 32px 0 32px;
			height: 148px;
			.menu-content {
				position: relative;
				display: block;
				width: 53px;
				height: 45px;
				background: url(~@/assets/img/icon/menu.png) no-repeat center center;
            	background-size: auto 100%;
				user-select: none;
			}
			.menu-box {
				position: absolute;
				right: 40px;
				top: 140px;
				width: 150px;
				display: block;
				border: 1px solid #ddd;
				background: #fff;
				li {
					width: 100%;
					user-select: none;
					line-height: 50px;
					text-align: center;
					margin: 0;
				}
			}
		}
	}
</style>
