<template>
	<div class="register">
		<div class="header">
			<mt-header fixed title="注册">
				<router-link to="/login" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</div>
		<div class="mint-content">
			<mt-field label="邮箱:" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
			<mt-field label="密码:" placeholder="请输入密码" type="password" v-model="pwd"></mt-field>
			<mt-field label="手机号:" placeholder="请输入手机号" type="text" v-model="phone"></mt-field>
			<mt-field label="昵称:" placeholder="请输入昵称" type="text" v-model="nickName"></mt-field>
			<mt-field label="名字:" placeholder="请输入真实姓名" type="text" v-model="realName"></mt-field>
			<mt-field label="性别:" placeholder="请输入性别" type="text" v-model="sex"></mt-field>
			<mt-button class="btn" type="primary" @click.native="getCode">获取注册码</mt-button>
			<mt-field label="验证码:" class="mui-code" placeholder="请输入验证码" type="text" v-model="verificationCode"></mt-field>

			<div class="mui-content-padded">
				<button class="mui-btn-primary" @click="register">注册</button>
				<div class="link-area">
					<router-link to="/login">已有账号</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import qs from "qs"
	import axios from 'axios';
	export default {
		name: 'register',
		//设置数据对象
		data() {
			return {
				email: '',
				pwd: '',
				phone:'',
				nickName: '',
				realName:'',
				sex:'',
				verificationCode: ''
			}
		},
		//事件处理器
		methods: {					
			/*注册事件*/
			register() {				
				debugger;
				var _this = this;
				//添加请求头
				axios.post('http://localhost:80/user/insert',
					qs.stringify({
						userCode: this.email,
						password: this.pwd,
						phone:this.phone,
						userNickname:this.nickName,
						userRealname:this.realName,
						sex:this.sex,
						verificationCode:this.verificationCode
					})
				).then(function(response) {
					debugger;
					if(response.data.success) {
						alert(response.data.successMessage+"请登录");
						/*注册成功后跳到登录*/
						_this.$router.push("/login");
					}else{
						alert(response.data.errorMessage);
					}
				}).catch(function(error) {
					console.log(error);
				})
			},
			/*获取验证玛*/
			getCode(){
				/*debugger;*/
				axios.post('http://localhost:80/user/sendVerificationCode',
					qs.stringify({
						userCode: this.email
					})
				).then(function(response) {
					/*debugger;*/
					if(response.data.success) {
						
					}
				}).catch(function(error) {

				})
			}
		}
	}
</script>

<style scoped>
	@import url("http://localhost:8081/static/css/style.css");
	.mint-header.is-fixed{
		height:0.8rem;
	}
	.mint-content {
		margin-top: 2.5rem;
	}
	.area {
		margin: 20px auto 0px auto;
	}
	
	.btn{
		float: right;
    	height: 40px;
    	margin-right: 7.2px;
    	border-radius: 5px;
	}
	.mui-btn-primary{
		width:101%;
	}	
	.mint-button--large{
		height: 0.8rem;
	}
	.mint-cell-wrapper {
		background-color: red;
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
		border: solid 1px #ddd;
		border-radius: 25px;
	}
	
	.oauth-area .oauth-btn:active {
		border: solid 1px #aaa;
	}
	
	.oauth-area .oauth-btn.disabled {
		background-color: #ddd;
	}
	.mint-cell{
		background-color: #efeff4;
	}
	.register{
		margin: 30px;
	}
</style>