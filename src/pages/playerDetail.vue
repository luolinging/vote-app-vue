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
						<img :src="item.url" class="img_header"/>
						<span class="desc">{{item.title}}</span>
					</a>
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<!--选手详情-->
		<div class="game_num">
			<label class="person">
				作品名：<span class="zpname" v-model="zpname">{{zpname}}</span>
			</label>
			<label class="person">
				编号：<span class="zpname" v-model="zpname">{{authornum}}</span>
			</label>
			<label class="person">
				票数：<span class="zpname" v-model="zpname">{{votenum}}</span>
			</label>
		</div>
		<div>
			<mt-button size="large" type="primary">投Ta一票</mt-button>
		</div>
		<div>
			<span>作家简介：</span>
			<textarea cols="46" rows="8"></textarea>
		</div>
		<div>
			<span>作品简介：</span>
			<textarea cols="46" rows="8"></textarea>
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
					url: 'http://localhost:8081/static/img/hongtao/空想系列---穿越静谧之地.jpg'
				}, {
					title: '与你随行--北方风景系列',
					url: 'http://localhost:8081/static/img/hongtao/与你随行---北方风景系列.jpg'
				}, {
					title: '寂静的绿',
					url: 'http://localhost:8081/static/img/hongtao/寂静的绿.jpg'
				}, {
					title: '空想系列--沉默的守护者',
					url: 'http://localhost:8081/static/img/hongtao/空想系列---沉默的守护者.jpg'
				}, {
					title: '少女的梦境--梦在远方',
					url: 'http://localhost:8081/static/img/hongtao/少女的梦境---梦在远方.jpg'
				}],
				/*选手详情*/
				zpname:"",
				votenum:"",
				authornum:""
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
/*.slide_show{
	margin-top: 0.5rem;
}*/

.mint-swipe {
		height: 250px;
	}
	/*图片轮播样式*/	
	.desc {
		font-weight: 400;
		opacity: .9;
		padding: 5px;
		height: 10px;
		line-height: 10px;
		width: 100%;
		color: # ##909090;
		background-color: #E0E0E0;
		position: absolute;
		bottom: 0;
	}
</style>