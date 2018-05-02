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
				参赛人数：<span class="cs_person" v-model="cs_person">{{cs_person}}</span>
			</label>
			<label class="person">
				累积投票：<span class="lj_vote" v-model="lj_vote">{{lj_vote}}</span>
			</label>
			<label class="person">
				访问次数：<span class="fw_time" v-model="fw_time">{{fw_time}}</span>
			</label>
		</div>
		<!--活动规则-->
		<br class="activity">
      <div>活动规则：每个账号只能投票一次</div>
			<div class="start_time">
        <span>开始时间：</span>
        <input id='start' type="text" class='form-control input-sm' name='start' @click='openPicker("start")' v-model='startTime'>
      </div>
      <div class="end_time">
        <span>结束时间：</span>
        <input id='end' type="text" class='form-control input-sm' name='end' @click='openPicker("end")' v-model='endTime'>
      </div>
      <mt-datetime-picker
        type="date"
        ref="picker"
        year-format="{value} 年"
        month-format="{value} 月"
        date-format="{value} 日"
        @confirm="handleConfirm"
      >
      </mt-datetime-picker>
		</div>
		<!--图片懒加载-->
		<div class="lazy">
			<div class="lazylist" v-for="playerImg in playerImgHome">
				<img class="lazyimg" v-lazy="playerImg.url" />
        <div class="content">
          <!--选手编号-->
          <span>1{{playerNum}}号</span>
          <mt-button class="btn" type="primary" @click.native="handleClick">投票</mt-button>
         <!--收获的投票数-->
          <span>80{{playerPnum}}票</span>
        </div>
			</div>

		</div>
		<div class="footer">
			<!--底部选项卡-->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="home">
        </mt-tab-container-item>
        <mt-tab-container-item id="search">
        </mt-tab-container-item>
        <mt-tab-container-item id="my">
        </mt-tab-container-item>
      </mt-tab-container>

      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="home"><router-link to="/">首页</router-link></mt-tab-item>
        <mt-tab-item id="search"><router-link to="/search">搜索</router-link></mt-tab-item>
        <mt-tab-item id="my"><router-link to="/my">我的</router-link></mt-tab-item>
      </mt-tabbar>
    </div>
	</div>
</template>

<script>
	import { Swipe, SwipeItem } from 'mint-ui';
	import 'mint-ui/lib/style.css';
	import { Toast } from 'mint-ui';
	import search from '../pages/search.vue';
	import my from '../pages/my.vue';
  import moment from 'moment';
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
				startTime: '2018-03-09',
        endTime:'2018-07-01',
        /*参赛人数，访问量参数设置*/
        cs_person:"",
        lj_vote:"",
        fw_time:"",
				/*底部标题参数*/
				selected: "home",
        /*选手作品相关*/
				playerImgHome: [{
					url: 'http://localhost:8081/static/hongtao/少女的梦境---观赏与聆听.jpg'
				}, {
					url: 'http://localhost:8081/static/kanghaoxian/进行之轴.png'
				}, {
					url: 'http://localhost:8081/static/niulongkai/树林中的礼貌.jpg'
				}, {
					url: 'http://localhost:8081/static/sunxiaodong/湖畔.jpg'
				}, {
          url: 'http://localhost:8081/static/sunxiaodong/湖畔.jpg'
        }, {
          url: 'http://localhost:8081/static/sunxiaodong/湖畔.jpg'
        }, {
          url: 'http://localhost:8081/static/sunxiaodong/湖畔.jpg'
        }, {
          url: 'http://localhost:8081/static/sunxiaodong/湖畔.jpg'
        }, {
          url: 'http://localhost:8081/static/sunxiaodong/湖畔.jpg'
        }],
        playerNum:"",//选手编号
        playerPnum:""//选手票数
			}
		},
		components: {
			'mt-swipe': Swipe,
			'mt-swipe-item': SwipeItem,
		},
		methods: {
		  /*投票时间设置*/
      openPicker(type) {
        this.type=type;
        this.$refs.picker.open();
      },
      handleConfirm(data) {
        let date = moment(data).format('YYYY-MM-DD');
        if(this.type=='start'){
          this.startTime = date;
        }
        if(this.type == 'end'){
          this.endTime = date;
        }
      },
		  /*投票按钮点击事件*/
      handleClick(){

      }
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
		font-weight: 400;
		opacity: .9;
		padding: 5px;
		height: 10px;
		line-height: 10px;
		width: 100%;
		color: #	##909090;
		background-color: #E0E0E0;
		position: absolute;
		bottom: 0;
	}
  .game_num{
    padding-left: 2px;
    padding-right: 2px;
    padding-top: 5px;
    background-color: #F0F0F0;
  }
  .activity{
    padding: 2px;
    background-color: #F0F0F0;
  }
  .activity .starttime{
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
	.mint-tabbar{
		background-color: #26a2ff;
	}

	.lazyimg[lazy=loading] {
	  width: 40px;
	  height: 200px;
	  margin: auto;
	}
  .lazylist .content{
        line-height: 35px;
  }
  .lazylist .content .btn{

  }
  	.footer{
    	position: absolute; /*相对于父元素contanier定位*/
    	bottom: 0;/*始终距离它的父元素的底部为0px.则是处于父元素的最底*/
  	}
</style>
