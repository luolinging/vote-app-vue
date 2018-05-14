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
			<mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>

			<mt-field label="密码:" placeholder="请输入密码" type="password" v-model="pwd"></mt-field>

			<mt-field label="密码:" placeholder="请再次输入密码" type="password" v-model="respwd"></mt-field>

			<mt-button class="btn" type="primary" @click.native="d">获取注册码</mt-button>
			<mt-field class="mui-code" placeholder="请输入验证" type="text" v-model="verificationCode"></mt-field>

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
				respwd: '',
				verificationCode: ''
			}
		},
		//数组或对象，用于接收来自父组件的数据
		props: [], //数组
		props: {}, //对象
		//计算属性
		computed: {},
		//局部注册组件
		components: {},
		//事件处理器
		methods: {
			/*注册事件*/
			register() {
				debugger;
				axios.post('http://localhost:80/user/insert',
					qs.stringify({
						userCode: this.email,
						password: this.pwd
					})
				).then(function(response) {
					debugger;
					if(response.data.success) {
						
					}
				}).catch(function(error) {

				})
			},
			/*获取验证玛*/
			getCode(){
				debugger;
				axios.post('http://localhost:80/user/sendVerificationCode',
					qs.stringify({
						userCode: this.email
					})
				).then(function(response) {
					debugger;
					if(response.data.success) {
						
					}
				}).catch(function(error) {

				})
			}
		},
		//一个对象，键是需要观察的表达式，值是对应回调函数
		watch: {},
		//生命钩子函数:实例创建完成之后被调用
		created() {},
		//生命钩子函数:el被新创建的vm.$el替换，挂载到实例上
		mounted: {},
		//自定义局部指令
		directives: {},
		//过滤器
		filters: {}
	}
</script>

<style scoped>
	@import url("http://localhost:8081/static/css/mui.min.css");
	@import url("http://localhost:8081/static/css/style.css");
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
	.btn{
		float: right;
    height: 49px;
	}
	.mui-btn-primary{
		width:101%;
	}
	.mui-code{
		padding-left: 49px;
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
	
	.mint-cell-wrapper {
		background-color: red;
	}
	
	.mui-btn {
		padding: 10px;
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
</style>