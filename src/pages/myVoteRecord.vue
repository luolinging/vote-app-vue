<template>
	<div class="vote-record">
		<div class="header">
			<mt-header fixed title="我的投票">
				<router-link to="/my" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</div>
		<!--循环输出结果-->
		<div >
				<ul>
					<li v-for="item in items" class="resList">
					<div class="id">编号：{{item.id}}</div>
					<div class="voteItemName">作品名：{{item.voteItemName}}</div>
					<div class="voteCount">票数：{{item.voteCount}}</div>
					</li>
				</ul>
		</div>

	</div>
</template>

<script>
	import qs from "qs";
import axios from 'axios';
	export default {
		name: 'myVoteRecord',
		//设置数据对象
		data() {
			return {
				items: []
			}
		},
		created() {
			debugger;
			var _this = this;
			axios.post('http://localhost:80/voteCount/getMyVote'
				).then(function(response) {
					debugger;
					if(response.data.success) {
						console.log("success");
					_this.items = response.data.map.value
						
					}else{						
						console.log("error");
					}
				}).catch(function(error) {
					console.log(error);
					
			})
		}
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
	
	.resList{
		margin-bottom: 30px;
    	padding-bottom: 30px;
    	margin-right: 50px;
    	background-color: #fff;
    	padding-top: 20px;
    	padding-left: 15px;
	}
	.id{
		margin-right: 1rem;
	}
	.voteItemName{
		margin-right: 1rem;
	}
	.voteCount{
		margin-right: 1rem;
	}
</style>