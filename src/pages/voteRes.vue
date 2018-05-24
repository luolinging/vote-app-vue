<template>
	<div>
		<div class="vote-record">
			<div class="header">
				<mt-header fixed title="投票结果">
					<!--这里传的参数应该是作品id,不应该是投票id,存在bug-->					
					<!--"'/playerDetail/'+voteIdObject.voteId"-->					
					<router-link :to="voteId" slot="left">
						<mt-button icon="back"></mt-button>
					</router-link>
					<router-link :to="chartId" slot="right">
						<mt-button class="btn">图像分析</mt-button>
					</router-link>
				</mt-header>
			</div>
		</div>
		<!--循环输出结果-->
		<div >
			<ul>
				<li v-for="item in items" class="resList">
				<div class="item_id">用&nbsp;&nbsp;户&nbsp;&nbsp;id：  {{item.id}}</div>
				<div class="item_phone">用户电话：{{item.phone}}</div>
				<div class="item_userCode">用户邮箱：{{item.userCode}}</div>
				<div class="item_userRealname">用户名字：{{item.userRealname}}</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import qs from "qs";
	import axios from 'axios';
	export default {
		name: 'voteRes',
		//设置数据对象
		data() {
			return {
				items: [],
				/*voteIdObject:{},*/
				voteId:"",
				chartId:""
			}
		},
		created(){
			debugger;
			var _this = this;
			var id = this.$route.params.id;
			this.voteId = "/playerDetail/"+this.$route.params.id;
			this.chartId = "/resChart/"+this.$route.params.id;
			axios.post('http://localhost:80/voteCount/getUserByVoteId',
				qs.stringify({
					voteId: id
				})
			).then(function(response) {
				debugger;
				/*_this.voteIdObject = response.data.map;*/
				_this.items = response.data.map.userList				
			}).catch(function(error) {
				console.log(error);
			})
			
		},
		
	}
</script>

<style scoped>
	.mint-header.is-fixed{
		height:0.8rem;
	}	
	.header {
		margin-bottom: 1.5rem;
	}
	
	.mint-navbar {
		margin: 0.3rem 0.3rem;
	}
	.tab0 {
		display: inline-block;
		text-align: left;
		margin-right: -75px;
	}
	
	.tab1 {
		text-align: left;
		margin-left: -30px;
		margin-right: -10px;
	}
	
	.tab2 {
		text-align: left;
		margin-right: -30px;
	}
	
	.tab3 {
		text-align: left;
		margin-right: -55px;
	}

	.resList{
		margin-bottom: 30px;
    	padding-bottom: 30px;
    	margin-right: 50px;
    	background-color: #fff;
    	padding-top: 20px;
    	line-height: 45px;
    	padding-left: 25px;
	}
</style>