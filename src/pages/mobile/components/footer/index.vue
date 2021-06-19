<template>
	<div class="footer">
		<div class="swan-contain-box content">
			<div class="text1">有项目吗，来聊一聊</div>
			<div class="text2" @click="changePage('Contact')">联系我们</div>
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
			<div class="content-l-b">
				<img src="@/assets/img/logo2.png" alt="swn">
				<div>SWAN 由天鹅设计拥有和运营</div>
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
		name: 'MobileFooter',
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
		.content {
			display: block;
			padding: 81px 45px 0 45px;
		}
		.text1 {
			@include fontSL(50px, 70px);
			color: #fff;
			font-weight: 500;
		}
		.text2 {
			margin-top: 20px;
			@include fontSL(50px, 70px);
			color: #fff;
			font-weight: 100;
			text-decoration: underline;
		}
		.menu {
			margin-top: 117px;
			span {
				margin-right: 48px;
				@include fontSL(30px, 42px);
				color: #fff;
			}
		}
		.logo-menu {
			display: flex;
			justify-content: space-between;
			padding: 0 32px;
			margin-top: 307px;
			img {
				width: 100px;
				height: 100px;
			}
		}
		.content-l-b {
			img {
				width: 116px;
				margin: 118px auto 0;
			}
			div {
				padding-bottom: 50px;
				margin-top: 22px;
				text-align: center;
				@include fontSL(22px, 30px);
				color: #818181;
			}
		}
	}
</style>
