<template>
	<div class="my">
		<div class="header">
			<mt-header fixed title="">
				<router-link to="/" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</div>
		<div class="zh" v-bind:class="allDetail" v-model="allDetail">
			账号名:{{allDetail.userCode}}
		</div>
		<div class="zx">
			<!--<router-link to="/login">-->
			<mt-button size="small" type="primary" @click.native="logoutClick">注销</mt-button>
			<!--</router-link>-->
		</div>
		<div class="myvote">
			<router-link to="/myVoteRecord">
				<mt-button size="small" type="primary">我的投票</mt-button>
			</router-link>
		</div>
		<div class="bm">
			<router-link to="/applyJion">
				<mt-button size="small" type="primary">报名</mt-button>
			</router-link>
		</div>
		<div class="settings">
			<router-link to="/settings">
				<mt-button size="small" type="primary">设置</mt-button>
			</router-link>
		</div>
	</div>
</template>

<script>
	import login from '../pages/login.vue';
	import myVoteRecord from '../pages/myVoteRecord.vue';
	import applyJion from '../pages/applyJion.vue';
	import settings from '../pages/settings.vue';
	import qs from "qs"
	import axios from 'axios';
	export default {
		name: 'my',
		//设置数据对象
		data() {
			return {
				allDetail: {}
			}
		},
		created() {
			debugger;
			var _this = this;
			axios.post('http://localhost:80/user/selectByPrimaryKey')
			.then(function(response) {
				debugger;
				_this.allDetail = response.data.map.value
			}).catch(function(error) {
				console.log(error)
			})
		},
		methods: {
			/*注销事件*/
			logoutClick() {
				debugger;
				var _this = this;
				if(_this.allDetail==null){
					alert("您还没有登录，请先登录！");
					_this.$router.push("/login")
				}else{
					axios.post('http://localhost:80/user/Cancellation',
					qs.stringify({
						userCode: _this.allDetail.userCode
					})
				).then(function(response) {
					debugger;
					if(response.data.success) {
						console.log(response.data.successMessage);
						_this.$router.push("/login");
					}else{
						alert("您还没有登录，请先登录！");
						_this.$router.push("/login")
					}
				}).catch(function(error) {
					console.log(error);
				})
				}
				
			}
		}
	}
</script>

<style scoped>
	.mint-header.is-fixed {
		height: 0.8rem;
	}
	
	.zh {
		margin-top: 1.5rem;
		margin-bottom: 0.5rem;
		margin-left: 0.4rem;
	}
	
	.mint-button--small {
		width: 2rem;
		height: 0.75rem;
		margin: 0.4rem;
	}
</style>