<template>
	<div class="player-detail">
		<div class="header">
			<mt-header fixed title="作品详情">
				<router-link to="/" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
				<router-link to="/voteRes" slot="right">
					<mt-button>投票结果</mt-button>
				</router-link>
			</mt-header>
		</div>
		<!--图片轮播-->
		<div class="slide_show">
			<mt-swipe :auto="3000">
				<mt-swipe-item v-for="item in items" :key="item.id">
					<a :href="item.href">
						<img :src="item.url" class="img" />
						<span class="desc">{{item.title}}</span>
					</a>
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<!--选手详情-->
		<div class="palyer">
			<mt-navbar>
				<mt-tab-item id="1">作品名：叶子{{zpname}}</mt-tab-item>
				<mt-tab-item id="2">编号：001{{authornum}}</mt-tab-item>
				<mt-tab-item id="3">票数：16{{votenum}}</mt-tab-item>
			</mt-navbar>
		</div>
		<div>
			<mt-button size="large" type="primary">投Ta一票</mt-button>
		</div>
		<div>
			<mt-cell title="作家简介："></mt-cell>
			<mt-field class="zzdetail" type="textarea" rows="10" v-model="zzdetail"></mt-field>
		</div>
		<div>
			<mt-cell title="作品简介："></mt-cell>
			<mt-field class="zpdetail" type="textarea" rows="10" v-model="zpdetail"></mt-field>
		</div>
	</div>
</template>

<script>
	import { Swipe, SwipeItem } from 'mint-ui';
	import 'mint-ui/lib/style.css';
	export default {
		name: 'playerDetail',
		//设置数据对象
		data() {
			return {
				/*图片轮播*/
				items: [{
					title: '空想系列--穿越静谧之地',
					url: '../../static/img/hongtao/穿越静谧之地.jpg'
				}, {
					title: '与你随行--北方风景系列',
					url: '../../static/img/hongtao/与你随行.jpg'
				}, {
					title: '寂静的绿',
					url: '../../static/img/hongtao/寂静的绿.jpg'
				}, {
					title: '空想系列--沉默的守护者',
					url: '../../static/img/hongtao/沉默的守护者.jpg'
				}, {
					title: '少女的梦境--梦在远方',
					url: '../../static/img/hongtao/梦在远方.jpg'
				}],
				/*选手详情*/
				zpname: "",
				votenum: "",
				authornum: ""
			}
		},
		//数组或对象，用于接收来自父组件的数据
		props: [], //数组
		props: {}, //对象
		//计算属性
		computed: {},
		//局部注册组件
		components: {
			'mt-swipe': Swipe,
			'mt-swipe-item': SwipeItem,
		},
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
	/*轮播图设置*/
	
	img {
		width: 100%;
	}
	
	.mint-swipe {
		height: 200px;
	}
	
	.desc {
		font-weight: 600;
		opacity: .9;
		padding: 5px;
		height: 20px;
		line-height: 20px;
		width: 100%;
		color: #fff;
		background-color: gray;
		position: absolute;
		bottom: 0;
	}
	
	.palyer {
		padding: 0.2rem 0.1rem;
		background-color: #F0F0F0;
	}
	
	.zzdetail,
	.zpdetail {
		border: solid 1px #acacb4;
	}
</style>