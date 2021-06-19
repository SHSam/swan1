<template>
	<div class="footer">
		<div class="swan-contain-box content">
			<div class="content-l">
				<div>
					<div class="text1">有项目吗，来聊一聊</div>
					<div class="text2" @click="changePage('Contact')">联系我们</div>
				</div>
				<div class="content-l-b">
					<img src="@/assets/img/logo2.png" alt="swn">
					<div>SWAN 由天鹅设计拥有和运营</div>
				</div>
			</div>
			<div class="content-r">
				<div class="menu">
					<span @click="changePage('Home')">首页</span>
					<span @click="changePage('Case')">案例</span>
					<span @click="changePage('Business')">服务</span>
					<span @click="changePage('Contact')">联系</span>
				</div>
				<div class="logo-menu">
					<a href="#"><img :src="logo1" alt=""></a>
					<a href="#"><img :src="logo2" alt=""></a>
					<a href="#"><img :src="logo3" alt=""></a>
					<a href="#"><img :src="logo4" alt=""></a>
					<a href="#"><img :src="logo5" alt=""></a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import logo1 from '@/assets/img/footer/logo1.png'
	import logo2 from '@/assets/img/footer/logo2.png'
	import logo3 from '@/assets/img/footer/logo3.png'
	import logo4 from '@/assets/img/footer/logo4.png'
	import logo5 from '@/assets/img/footer/logo5.png'
	export default {
		name: 'Footer',
		data () {
			return {
				logo1: logo1,
				logo2: logo2,
				logo3: logo3,
				logo4: logo4,
				logo5: logo5
			}
		},
		methods: {
			changePage (name) {
				if (!window.location.href.match(name.toLocaleLowerCase())) {
					if (name === 'Home') {
						this.$router.replace({name: name})
					} else {
						this.$router.push({name: name})
					}
				}
            }
		}
	}
</script>
<style lang="scss" scoped>
	.footer {
		background-color: #000;
		height: 771px;
		.content {
			display: flex;
			justify-content: space-between;
			padding-top: 163px;
			&>div {
				height: 554px;
			}
			.text1 {
				@include fontSL(41px, 57px);
				color: #fff;
			}
			.text2 {
				width: fit-content;
				margin-top: 33px;
				padding-bottom: 3px;
				font-family: '苹方-简 纤细体';
				font-weight: 100;
				@include fontSL(41px, 57px);
				color: #fff;
				cursor: pointer;
				&::after {
					content: '';
					display: block;
					width: 100%;
					border-bottom: 1px solid #fff;
					transform: rotate3d(0, 0.5, 0, 0deg);
					transition: all .5s;
				}
				&:hover {
					&::after{
						transform: rotate3d(0, 0.5, 0, 90deg);
					}
				}
			}
		}
		.content-l {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.content-l-b {
				img {
					width: 116px;
				}
				div {
					margin-top: 5px;
					@include fontSL(13px, 18px);
					color: #818181;
				}
			}
		}
		.content-r {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.menu {
				span {
					margin-left: 33px;
					@include fontSL(24px, 33px);
					color: #767676;
					cursor: pointer;
					transition: all .3s;
					&:hover {
						color: #fff;
					}
				}
			}
		}
		.logo-menu {
			display: flex;
			justify-content: space-between;
			img {
				width: 50px;
				height: 50px;
				transition: all .3s;
				&:hover {
					opacity: .6;
				}
			}
		}
	}
</style>
