<template>
	<div>
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
				<div class="game_num" >
					<mt-navbar style="font-size: 30px;">
						<mt-tab-item id="1" >
							<div style="font-size: 20px;">
								参赛人数：{{length}}
							</div>
							
						</mt-tab-item>
						<mt-tab-item id="2">
							<div style="font-size: 20px;">
								累积投票：{{voteTotalCount}}
							</div>
						</mt-tab-item>
					</mt-navbar>
				</div>
				<!--活动规则-->
				<div class="activity">
					<div class="role">活动规则：每个账号只能投票一次</div>
					<div class="start_time">
						<span class="start_span">开始时间：</span>
						<input id='start' type="text" class='form-control input-sm' name='start' @click='openPicker("start")' v-model='startTime'>
					</div>
					<div class="end_time">
						<span class="end_span">结束时间：</span>
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
					<mt-tabbar v-model="selected">
						<mt-tab-item id="home">
							<router-link to="/">首页</router-link>
						</mt-tab-item>
						<mt-tab-item id="search">
							<router-link to="/search">搜索</router-link>
						</mt-tab-item>
						<mt-tab-item id="my">
							<router-link to="/my">我的</router-link>
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
				length:0,
				voteTotalCount:0,
				myShowSetting: ""
			}
		},
		components: {
			'mt-swipe': Swipe,
			'mt-swipe-item': SwipeItem
		},
		created() {
			debugger;
			var _this = this;
			axios.post('http://localhost:80/votediv/selectAll')
			.then(res => {
				debugger;
				_this.allArt = res.data.map(function(artpro) {
					artpro.productionPic = "http://localhost:80/imgupload/" + artpro.productionPic;				
					return artpro;
				})
				this.length=_this.allArt.length;
				for(var i=0;i<_this.allArt.length;i++){
					this.voteTotalCount += parseInt(_this.allArt[i].voteCount);
				}
			}).catch(function(error) {
				console.log(error);
			})
			
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
				/*debugger;*/
				var _this = this;
				axios.post('http://localhost:80/voteCount/vote',
					qs.stringify({
						itemId: id
					})
				).then(function(response) {
					/*debugger;*/
					if(response.data.success) {
						alert("投票成功");
						//TODO  这里可以再使用一个ajax请求，来局部刷新网页    目前先用
						history.go(0);
					}else if(response.data.success==false){
						/*debugger;*/
						
						alert(response.data.errorMessage);
						if(response.data.errorMessage=="请先登录"){
							_this.$router.push("/login")
						}

					}
				}).catch(function(error) {
					console.log(error);
				})
			}
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

	#start{
		margin-top: 10px;
	}
	#end{
		margin-top: 10px;
	}

	.mint-swipe {
		height: 364px;
	}
	.role{
		margin-bottom: 15px;
	}
	.desc {
		font-weight: 600;
		opacity: 0.9;
		height: 20px;
		line-height: 20px;
		width: 100%;
		color: #fff;
		background-color: gray;
		position: absolute;
		bottom: 0;
		padding-bottom: 36px;
    	padding-top: 14px;
    	padding-left: 5px;
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
	
	.lazyimg[lazy=loading] {
		width: 40px;
		height: 200px;
		margin: auto;
	}
	.lazy{
		margin-bottom: 60px;
	}
	.lazylist .content {
		margin-top: 20px;
    	margin-bottom: 20px;
		text-align: center;
		height:39px; 
		line-height:39px; 
		width:100%; 
		overflow:hidden;
	}
	
	.mint-button--normal,
	.mint-button--small {
		margin-left: 1rem;
		margin-right: 1rem;
	}
	
	.footer {
		height: 100px;
		width: 100%;
		position: fixed;
		bottom: 0;
	}
	.mint-tabbar{
		height: 30px;
		background-color: #e5e5d9;;
	}
	.mint-tab-item-label{
		height: 30px;
	    line-height: 35px;
	}
	a{
		font-size: 16px;
		color: #000000;
	}
	.mint-tab-item.is-selected{
		background-color: #26a2ff;
	}
	
	
</style>