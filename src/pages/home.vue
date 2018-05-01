<template>
	<div class="home">
		<!--顶部导航栏-->
		<div class="header">
			<mt-header fixed title="艺术大赛"></mt-header>
		</div>
		<!--图片轮播-->
		<div class="slide_show">
			<mt-swipe :auto="3000">
				<mt-swipe-item v-for="item in items" :key="item.id">
					<a :href="item.href">
						<img :src="item.url" class="img_header" />
						<span class="desc">{{item.title}}</span>
					</a>
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<!--参赛人数-->
		<div class="game_num">
			<label class="person">
				参赛人数：<span class="cs_person" v-model="cs_person">{{}}</span>
			</label>
			<label class="person">
				累积投票：<span class="lj_vote" v-model="lj_vote">{{}}</span>
			</label>
			<label class="person">
				访问次数：<span class="fw_time" v-model="fw_time">{{}}</span>
			</label>

		</div>
		<!--活动规则-->
		<div class="activity">
			活动规则:每个账号只能投票一次
			<div class="starttime">
				<label class="starttime1">投票时间：
			    <span @click="open('picker1')">2018-03-21</span>
				</label>
			</div>
		</div>
		<!--图片懒加载-->
		<div class="lazy">
			<!--<div class="lazylist" v-for="showimg in showimgs">
				<img class="lazyimg" v-lazy="showimg.url" />
			</div>-->

		</div>
		<div class="footer">
			<!--底部选项卡-->
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="home"></mt-tab-container-item>
				<mt-tab-container-item id="search">搜索</mt-tab-container-item>
				<mt-tab-container-item id="my">我的</mt-tab-container-item>
			</mt-tab-container>
			<div class="bottom-bar">
				<mt-tabbar v-model="selected">
					<mt-tab-item id="home">
						<router-link to="">
							首页
						</router-link>
					</mt-tab-item>
					<mt-tab-item id="search">
						<router-link to="/search">
							搜索
						</router-link>
					</mt-tab-item>
					<mt-tab-item id="my">
						<router-link to="/my">
							我的
						</router-link>
					</mt-tab-item>
				</mt-tabbar>
			</div>
		</div>
	</div>
</template>

<script>
	import { Swipe, SwipeItem } from 'mint-ui';
	import 'mint-ui/lib/style.css';
	import { Toast } from 'mint-ui';
	import search from '../pages/search.vue';
	import my from '../pages/my.vue';

	export default {
		name: 'home',
		data() {
			return {
				/*顶层标题参数*/
				items: [{
					title: 'Blahblah-臧鹏',
					url: 'http://localhost:8081/static/img1.png'
				}, {
					title: '云梦遥-文雅',
					url: 'http://localhost:8081/static/img2.png'
				}, {
					title: '午后-孙晓东',
					url: 'http://localhost:8081/static/img3.png'
				}],
				/*图片轮播*/
				cs_person: '',
				lj_vote: '',
				fw_time: '',
				/*投票时间参数设置*/
				value: null,
				value1: null,
				startDate: new Date('2018-3-9'),
				endDate: new Date(),
				/*底部标题参数*/
				selected: '',
				showimgs: [{
					url: 'http://localhost:8081/static/hongtao/少女的梦境---观赏与聆听.jpg'
				}, {
					url: 'http://localhost:8081/static/kanghaoxian/进行之轴.png'
				}, {
					url: 'http://localhost:8081/static/niulongkai/树林中的礼貌.jpg'
				}, {
					url: 'http://localhost:8081/static/sunxiaodong/湖畔.jpg'
				}]
			}
		},
		components: {
			'mt-swipe': Swipe,
			'mt-swipe-item': SwipeItem,
		},
		methods: {
		}
	}
</script>

<style scoped>	
	.img_header {
		width: 100%;
	}
	
	.mint-swipe {
		height: 250px;
	}
	/*图片轮播样式*/
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
	/*.lazy{
		height: 900px;
	}*/
	.lazy .lazyimg {
		width: 345px;
		
	}
	.mint-tabbar{
		background-color: #26a2ff;
	}
</style>