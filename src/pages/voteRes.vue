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
		<div>
			<mt-navbar v-for="item in items" :key="item.id">
				<mt-tab-item id="0" class="tab0">{{item.num}}.</mt-tab-item>
				<mt-tab-item id="1" class="tab1">编号：{{item.authornum}}</mt-tab-item>
				<mt-tab-item id="2" class="tab2">作品名：{{item.zpname}}</mt-tab-item>
				<mt-tab-item id="3" class="tab3">总票数：{{item.votenum}}</mt-tab-item>
			</mt-navbar>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		//设置数据对象
		data() {
			return {
				items: [{
					num: 1,
					authornum: "叶子",
					zpname: "001",
					votenum: "16"
				}, {
					num: 2,
					authornum: "池边迎春",
					zpname: "006",
					votenum: "30"
				}, {
					num: 3,
					authornum: "山杏报春三",
					zpname: "006",
					votenum: "30"
				}, {
					num: 4,
					authornum: "山杏报春三",
					zpname: "006",
					votenum: "30"
				}, {
					num: 5,
					authornum: "山杏报春三",
					zpname: "006",
					votenum: "30"
				}, {
					num: 6,
					authornum: "山杏报春三",
					zpname: "006",
					votenum: "30"
				}, {
					num: 7,
					authornum: "山杏报春三",
					zpname: "006",
					votenum: "30"
				}, {
					num: 8,
					authornum: "山杏报春三",
					zpname: "006",
					votenum: "30"
				}, {
					num: 9,
					authornum: "山杏报春三",
					zpname: "006",
					votenum: "30"
				}, {
					num: 10,
					authornum: "山杏报春三",
					zpname: "006",
					votenum: "30"
				}, {
					num: 11,
					authornum: "山杏报春三",
					zpname: "006",
					votenum: "30"
				}, {
					num: 12,
					authornum: "山杏报春三",
					zpname: "006",
					votenum: "30"
				}, {
					num: 13,
					authornum: "山杏报春三",
					zpname: "006",
					votenum: "30"
				}, {
					num: 14,
					authornum: "山杏报春三",
					zpname: "006",
					votenum: "30"
				}, {
					num: 15,
					authornum: "山杏报春三",
					zpname: "006",
					votenum: "30"
				}, {
					num: 16,
					authornum: "山杏报春三",
					zpname: "006",
					votenum: "30"
				}, {
					num: 17,
					authornum: "山杏报春三",
					zpname: "006",
					votenum: "30"
				}, {
					num: 18,
					authornum: "山杏报春三",
					zpname: "006",
					votenum: "30"
				}, {
					num: 19,
					authornum: "山杏报春三",
					zpname: "006",
					votenum: "30"
				}, {
					num: 20,
					authornum: "山杏报春三",
					zpname: "006",
					votenum: "30"
				}]
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
		methods: {},
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