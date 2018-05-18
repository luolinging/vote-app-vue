<template>
	<div class="login">
		<div class="header">
			<mt-header fixed title="登录">
				<router-link to="/my" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</div>
		<div class="mint-content">
			<mt-field label="用户名:" placeholder="请输入邮箱" v-model="username"></mt-field>
			<mt-field label="密码:" placeholder="请输入密码" type="password" v-model="pwd"></mt-field>
			<div class="mui-content-padded">
				<button class="mui-btn-primary" @click="login">登录</button>
				<div class="link-area">
					<router-link to="/register">注册</router-link>
					<span class="spliter">|</span>
					<a id='forgetPassword'>忘记密码</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import qs from "qs"
	import axios from 'axios';
	export default {
		name: 'login',
		//设置数据对象
		data() {
			return {
				username: "",
				pwd: ""
			}
		},
		//事件处理器
		methods: {
			login(){
				/*debugger;*/
				var _this = this;
				axios.post('http://localhost:80/user/login',
					qs.stringify({
						userCode: this.username,
						password: this.pwd,
					})
				).then(function(response){
					/*debugger;*/
					if(response.data.success){
						console.log(response.data.successMessage);
						/*登录成功后，直接跳转到home界面*/
						/*debugger;*/						
						alert(response.data.successMessage)
						_this.$router.push("/home");
					}else{
						alert("登录失败");
					}
				})
				.catch(function(error){
					console.log(error);
				});
				

			}
		}
	}
</script>

<style scoped>
	@import url("http://localhost:8081/static/css/mui.min.css");
	@import url("http://localhost:8081/static/css/style.css");
	.mint-header.is-fixed{
		height:0.8rem;
	}	
	.mint-content {
		margin-top: 2.5rem;
	}
	/*登录样式设置   mui组件源代码*/
	
	.area {
		margin: 20px auto 0px auto;
	}
	
	.mui-input-group {
		margin-top: 10px;
	}
	
	.mui-input-group:first-child {
		margin-top: 20px;
	}
	
	.mui-input-group label {
		width: 22%;
	}
	
	.mui-input-row label~input,
	.mui-input-row label~select,
	.mui-input-row label~textarea {
		width: 78%;
	}
	
	.mui-checkbox input[type=checkbox],
	.mui-radio input[type=radio] {
		top: 6px;
	}
	
	.mui-content-padded {
		margin-top: 25px;
		margin-left: auto;
	    margin-right: auto;
	    width: 28%;
	}
	.mint-cell-wrapper{
		margin-top: 0.2rem;
	}
	
	.mui-btn {
		padding: 10px;
	}
	.mui-btn-primary{
		width:101%;
	}
	
	.link-area {
		display: block;
		margin-top: 25px;
		text-align: center;
	}
	
	.spliter {
		color: #bbb;
		padding: 0px 8px;
	}
	
	.oauth-area {
		position: absolute;
		bottom: 20px;
		left: 0px;
		text-align: center;
		width: 100%;
		padding: 0px;
		margin: 0px;
	}
	
	.oauth-area .oauth-btn {
		display: inline-block;
		width: 50px;
		height: 50px;
		background-size: 30px 30px;
		background-position: center center;
		background-repeat: no-repeat;
		margin: 0px 20px;
		/*-webkit-filter: grayscale(100%); */
		border: solid 1px #ddd;
		border-radius: 25px;
	}
	
	.oauth-area .oauth-btn:active {
		border: solid 1px #aaa;
	}
	
	.oauth-area .oauth-btn.disabled {
		background-color: #ddd;
	}
</style>