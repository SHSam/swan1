<template>
	<div class="swan-header" :class="[isType2?'type2':'']">
		<div class="swan-contain-box">
			<img :src="logo" alt="" class="logo" @click="goHome">
			<ul class="menu-box">
				<li v-for="item in menu" :key="item.name" :class="{active:item.url==nowPath}">
					<router-link :to="{path: item.url}">{{item.name}}</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import logo from '@/assets/img/logo.png'
	// import { menu } from '@/assets/script/mouse'
	import { scrollTop } from '@/utils'
	export default {
		name: 'Header',
		data () {
			return {
				logo: logo,
				isType2: false,
				nowPath: '/home',
				menu: [{
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
			$route (to) {
				this.nowPath = to.path
			}
		},
		methods: {
			scrollChange (params) {
				const sctop = scrollTop()
				this.isType2 = sctop >= 10
			},
			goHome () {
				this.$router.replace({name: 'Home'})
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
	.swan-header {
		position: fixed;
		top: 0;
		width: 100%;
		background: #fff;
		height: 100px;
		transition: all .5s;
		&.type2 {
			border-bottom: 1px solid rgba($color: #000, $alpha: .05);
			height: 76px;
			z-index: 999;
		}
		&>div {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 100%;
			.logo {
				width: 98px;
				height: 30px;
				transition: opacity .3s;
				&:hover {
					opacity: .6;
				}
			}
			.menu-box {
				display: flex;
				li {
					padding-bottom: 2px;
					margin-left: 64px;
					font-size: 16px;
					box-sizing: border-box;
					border-bottom: 3px solid transparent;
					transition: all .5s;
					&:hover {
						border-color: #333;
					}
					a {
						color: #000;
					}
				}
			}
		}
	}
</style>
