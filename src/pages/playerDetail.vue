<template id="detail">
	<div class="player-detail">
		<div class="header">
			<mt-header fixed title="作品详情">
				<router-link to="/" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
				<router-link :to="'/voteRes/'+details.id" slot="right">
					<mt-button >投票结果</mt-button>
				</router-link>
			</mt-header>
		</div>
		<!--图片轮播-->
		<div class="slide_show">
			<img src="../../dist/static/img/gupanpan/1.jpg"/>
		</div>
		<!--选手详情-->
		<div class="palyer">
			<mt-navbar>
				<mt-tab-item id="1">作品名：{{details.voteItemName}}</mt-tab-item>
				<mt-tab-item id="2">编号：{{details.userId}}</mt-tab-item>
				<mt-tab-item id="3">票数：{{details.voteCount}}</mt-tab-item>
			</mt-navbar>
		</div>
		<div>
			<mt-button size="large" type="primary" @click.native="handleClick(details.id)">投Ta一票</mt-button>
		</div>
		<div>
			<mt-cell title="作品简介："></mt-cell>
			<div>
				{{details.voteItemDecrib}}
			</div>
		</div>
	</div>
</template>

<script>
	import { Swipe, SwipeItem } from 'mint-ui';
	import 'mint-ui/lib/style.css';
	import qs from "qs";
	import axios from 'axios';
	export default {
		name: 'playerDetail',
		//设置数据对象
		data() {
			return {						
				details:{}
			}
		},
		created() {
			debugger;
			var _this = this;
			var id = this.$route.params.id;
				axios.post('http://localhost:80/votediv/selectById',
					qs.stringify({
						id:id
					})
				).then(function(response) {
					debugger;
					
					/*_this.details = response.data.map(function(artpro) {
						artpro.productionPic = "http://localhost:80/imgupload/" + artpro.productionPic;
						return artpro;
					})*/
					
					_this.details=response.data;
					_this.details.productionPic="http://localhost:80/imgupload/"+response.data.productionPic
					
				}).catch(function(error) {

				})
		},
		methods:{
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
					}
				}).catch(function(error) {
					console.log(error);
				})
			}/*,
			voteResClick(id){
				this.$router.push({name:'voteRes',params:{userId:id}});
			}*/
		}
	}
</script>

<style scoped>
	.mint-header.is-fixed{
		height:0.8rem;
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
	
	.palyer {
		padding: 0.2rem 0.1rem;
		background-color: #F0F0F0;
	}
	
	.zzdetail,
	.zpdetail {
		border: solid 1px #acacb4;
	}
</style>