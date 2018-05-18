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
		<div v-for="item in items">
				<ul>
					<ol >
					<!--<mt-tab-item id="0" class="tab0">{{item.id}}.</mt-tab-item>-->
					<span>{{item.id}}</span>&nbsp;&nbsp;
					<span>作家名：{{item.username}}</span>
					<span>作品名：{{item.voteItemName}}</span>
					<span>票数：{{item.voteCount}}</span>
					</ol>
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
				items: [/*{
					num: 1,
					authorname: "顾盼盼",
					zpname: "池边迎春"
				}, {
					num: 2,
					authorname: "洪涛",
					zpname: "寂静的绿"
				}, {
					num: 3,
					authorname: "康好贤",
					zpname: "感知非现实"
				}, {
					num: 4,
					authorname: "牛龙凯",
					zpname: "树林中的礼貌"
				}, {
					num: 5,
					authorname: "孙晓东",
					zpname: "斑斓夜色"
				}, {
					num: 6,
					authorname: "孙莹",
					zpname: "某一天II"
				}, {
					num: 7,
					authorname: "文雅",
					zpname: "江南忆"
				}, {
					num: 8,
					authorname: "臧鹏",
					zpname: "红墨水"
				}, {
					num: 9,
					authorname: "张子叶",
					zpname: "无状态.51"
				}*/]

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
		margin-bottom: 1rem;
	}
	
	.mint-navbar {
		margin: 0.3rem 0.3rem;
	}
	
	/*.tab0 {
		display: inline-block;
		text-align: left;
		margin-right: -75px;
	}
	
	.tab1 {
		text-align: left;
		margin-left: -60px;
		margin-right: -30px;
	}
	
	.tab2 {
		text-align: left;
		margin-left: 20px;
		margin-right: -15px;
	}*/
</style>