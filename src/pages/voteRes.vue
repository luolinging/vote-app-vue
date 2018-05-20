<template>
	<div>
		<div class="vote-record">
			<div class="header">
				<mt-header fixed title="投票结果">
					<router-link to="/playerDetail" slot="left">
						<mt-button icon="back"></mt-button>
					</router-link>
					<router-link to="/resChart" slot="right">
						<mt-button class="btn">图像分析</mt-button>
					</router-link>
				</mt-header>
			</div>
		</div>
		<!--循环输出结果-->
		<!--<div>
			<mt-navbar v-for="item in items" :key="item.id">
				<mt-tab-item id="0" class="tab0">{{item.num}}.</mt-tab-item>
				<mt-tab-item id="1" class="tab1">编号：{{item.authornum}}</mt-tab-item>
				<mt-tab-item id="2" class="tab2">作品名：{{item.zpname}}</mt-tab-item>
				<mt-tab-item id="3" class="tab3">总票数：{{item.votenum}}</mt-tab-item>
			</mt-navbar>
		</div>-->
		<!--循环输出结果-->
		<div v-for="item in items">
			<ul>
				<ol >
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
	export default {
		name: 'HelloWorld',
		//设置数据对象
		data() {
			return {
				items: []
			}
		},
		created(){
			debugger;
			var _this = this;
			var id = this.$route.params.id;
			axios.post('http://localhost:80/voteCount/getUserByVoteId',
				qs.stringify({
					voteId: id
				})
			).then(function(response) {
				_this.items = response.data.map.value
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
		margin-bottom: 1rem;
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
</style>