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
		<div>
			<mt-navbar v-for="item in items" :key="item.id">
				<mt-tab-item id="0" class="tab0">{{item.num}}.</mt-tab-item>
				<mt-tab-item id="1" class="tab1">作家名：{{item.authorname}}</mt-tab-item>
				<mt-tab-item id="2" class="tab2">作品名：{{item.zpname}}</mt-tab-item>
			</mt-navbar>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'myVoteRecord',
		//设置数据对象
		data() {
			return {
				items: [{
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
		margin-left: -60px;
		margin-right: -30px;
	}
	
	.tab2 {
		text-align: left;
		margin-left: 20px;
		margin-right: -15px;
	}
</style>