<template>
	<div>
		<!--<div id="main">
			<myModule v-show="myShowSetting"></myModule>
		</div>-->
		<div id="panel">
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
					<mt-navbar>
						<mt-tab-item id="1">参赛人数：{{cs_person}}</mt-tab-item>
						<mt-tab-item id="2">累积投票：{{lj_vote}}</mt-tab-item>
					</mt-navbar>
				</div>
				<!--活动规则-->
				<div class="activity">
					<div class="role">活动规则：每个账号只能投票一次</div>
					<div class="start_time">
						<span>开始时间：</span>
						<input id='start' type="text" class='form-control input-sm' name='start' @click='openPicker("start")' v-model='startTime'>
					</div>
					<div class="end_time">
						<span>结束时间：</span>
						<input id='end' type="text" class='form-control input-sm' name='end' @click='openPicker("end")' v-model='endTime'>
					</div>
					<mt-datetime-picker type="date" ref="picker" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" @confirm="handleConfirm">
					</mt-datetime-picker>
				</div>
				<!--图片懒加载-->
				<div class="lazy">
					<div class="lazylist" v-for="art in allArt" v-model="allArt">
						<div>
							<router-link :to="'/playerDetail/'+art.id">
								<img class="lazyimg" v-lazy="art.productionPic" />
							</router-link>
						</div>
						<div class="content">
							<span>{{art.id}}&nbsp;号</span> &nbsp;&nbsp;
							<mt-button class="btn" type="primary" @click.native="handleClick(art.id)">投票</mt-button>
							<span>{{art.voteCount}}票</span>
						</div>
					</div>
				</div>
				<!--底部选项卡-->
				<div class="footer">
					<mt-tab-container v-model="selected">
						<mt-tab-container-item id="home">
						</mt-tab-container-item>
						<mt-tab-container-item id="search">
						</mt-tab-container-item>
						<mt-tab-container-item id="my">
						</mt-tab-container-item>
					</mt-tab-container>
					<mt-tabbar v-model="selected" fixed>
						<mt-tab-item id="home">
							<router-link to="/">首页</router-link>
						</mt-tab-item>
						<mt-tab-item id="search">
							<router-link to="/search">搜索</router-link>
						</mt-tab-item>
						<mt-tab-item id="my">
							<div id="mydiv">
								<router-link to="/my">我的</router-link>
							</div>
						</mt-tab-item>
					</mt-tabbar>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { Swipe, SwipeItem } from 'mint-ui';
	import 'mint-ui/lib/style.css';
	import { Toast } from 'mint-ui';
	import moment from 'moment';
	import my from './my.vue';
	import qs from "qs";
	import axios from 'axios';
	export default {
		name: 'home',
		data() {
			return {
				/*图片轮播*/
				items: [{
					title: 'Blahblah-臧鹏',
					url: '../../static/img/img1.png'
				}, {
					title: '云梦遥-文雅',
					url: '../../static/img/img2.png'
				}, {
					title: '午后-孙晓东',
					url: '../../static/img/img3.png'
				}],
				/*投票时间参数设置*/
				startTime: '2018-03-09',
				endTime: '2018-07-01',
				/*参赛人数，访问量参数设置*/
				cs_person: "",
				lj_vote: "",
				fw_time: "",
				/*底部标题参数*/
				selected: "home",
				/*选手作品相关*/
				allArt: [],
				myShowSetting: ""
			}
		},
		components: {
			'mt-swipe': Swipe,
			'mt-swipe-item': SwipeItem
			/*,
						"myModule": my*/
		},
		methods: {
			/*投票时间设置*/
			openPicker(type) {
				this.type = type;
				this.$refs.picker.open();
			},
			handleConfirm(data) {
				let date = moment(data).format('YYYY-MM-DD');
				if(this.type == 'start') {
					this.startTime = date;
				}
				if(this.type == 'end') {
					this.endTime = date;
				}
			},
			/*投票按钮点击事件*/
			handleClick(id) {
				axios.post('http://localhost:80/voteCount/insert',
					qs.stringify({
						itemId: id
					})
				).then(function(response) {
					if(response) {
						alert("投票成功");
						history.go(0);
						/*axios.post('http://localhost:80/voteCount/insert')
							.then(function(response) {
									/*this.allArt = res.data.map(function(artpro) {
											artpro.voteCount = artpro.voteCount;
											return artpro;

									}*/
						/*this.allArt = res.data
									})*/
					}
				}).catch(function(error) {
					console.log(error);
				})
			}
			/*,
						myShow() {
							this.myShowSetting = !this.myShowSetting
						}*/
		},
		created() {
			var _this = this;
			axios.post('http://localhost:80/votediv/selectAll').then(res => {
				_this.allArt = res.data.map(function(artpro) {
					artpro.productionPic = "http://localhost:80/imgupload/" + artpro.productionPic;
					return artpro;
				})
				/*this.originalValue = res.data;
				for(let i = 0; i <= this.originalValue.length; i++) {
				  var tempArr={};
	              tempArr.id=this.originalValue[i].id;
	              tempArr.productionPic="http://localhost:80"+this.originalValue[i].productionPic;
	              tempArr.voteItemName=this.originalValue[i].voteItemName;
	              tempArr.voteItemDecrib=this.originalValue[i].voteItemDecrib;
	              tempArr.voteCount=this.originalValue[i].voteCount;
	              
	              _this.allArt.push(tempArr);
	            }*/
			}).catch(function(error) {
				console.log(error);
			})
		}
	}
</script>

<style scoped>
	.header {
		margin-bottom: 0.54rem;
	}
	
	.mint-header.is-fixed {
		position: absolute;
		height: 0.8rem;
	}
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
	
	.game_num {
		padding: 0.1rem 0.05rem;
		background-color: #F0F0F0;
	}
	
	.activity {
		padding: 0.2rem;
		margin-bottom: 0.1rem;
		margin-top: 0.1rem;
		background-color: #F0F0F0;
	}
	
	.activity .starttime {
		padding-right: 2px;
		padding-top: 2px;
		padding-bottom: 5px;
	}
	
	@component datetime {
		@descendent wrapper {
			padding: 0 20px;
			position: absolute 50% * * *;
			width: 100%;
			transform: translateY(-50%);
			button:not:(last-child) {
				margin-bottom: 20px;
			}
		}
	}
	
	.lazy .lazyimg {
		width: 100%
	}
	
	.mint-tabbar {
		background-color: #26a2ff;
	}
	
	.lazyimg[lazy=loading] {
		width: 40px;
		height: 200px;
		margin: auto;
	}
	
	.lazylist .content {
		padding-top: 5px;
		padding-bottom: 15px;
		text-align: center;
	}
	
	.mint-button--normal,
	.mint-button--small {
		margin-left: 1rem;
		margin-right: 1rem;
	}
	
	.footer {
		position: absolute;
		/*相对于父元素contanier定位*/
		bottom: 0;
		/*始终距离它的父元素的底部为0px.则是处于父元素的最底*/
	}
</style>