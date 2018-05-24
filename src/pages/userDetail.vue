<template>
	<div class="userDetail">
		<div class="header">
			<mt-header fixed title="用户信息">
				<router-link to="/settings" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</div>
		<div class="main">
			<div class="topselected" v-bind:class="allDetail" v-model="allDetail">
				<mt-cell title="用户名">{{allDetail.userCode}}</mt-cell>
				<mt-cell title="性别">{{allDetail.sex}}</mt-cell>
				<mt-cell title="真实姓名">{{allDetail.userRealname}}</mt-cell>
				<mt-cell title="昵称">{{allDetail.userNickname}}</mt-cell>
			</div>
		</div>
	</div>
</template>

<script>
	import qs from "qs"
	import axios from 'axios';
	import { Indicator, MessageBox } from 'mint-ui';
	export default {
		name: 'applyJion',
		props: {
			multiple: Boolean,
			max: Number
		},
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
				if(response.data.success){
					_this.allDetail = response.data.map.value
				}else{
					alert("请先登录！");
					_this.$router.push("/login");
				}							
			}).catch(function(error) {
				console.log(error)
			})
		}
	}
</script>

<style scoped>
	@import url("http://localhost:8081/static/css/mui.min.css");
	@import url("http://localhost:8081/static/css/style.css");
	.mint-header.is-fixed {
		height: 0.8rem;
	}
	
	.userDetail {
		margin-top: 0.5rem;
	}
	
	.userDetail .main {
		margin-top: 1rem;
	}
	
	.main .topselected {
		padding-bottom: 0.2rem;
	}
	
	.mint-cell {
		margin-top: 0.03rem;
	}
</style>