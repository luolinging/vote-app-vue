<template>
	<div class="res-chart">
		<div class="vote-record">
			<div class="header">
				<mt-header fixed title="图像分析">
					<router-link :to="voteId" slot="left">
						<mt-button icon="back"></mt-button>
					</router-link>
				</mt-header>
			</div>
		</div>
		
		<div class="charts" id="myChart" :style="{width: '100%', height: '300px'}">
		</div>
		
	</div>
</template>

<script>import qs from "qs";
import axios from 'axios';
let echarts = require('echarts')
// 引入柱状图组件
require('echarts/lib/chart/pie')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
	name: 'resChart',
	//设置数据对象
	data() {
		return {
			voteId:""
		}
	},
	mounted() {
		this.drawLine();
	},
	methods: {
		drawLine() {
			// 基于准备好的dom，初始化echarts实例
			let myChart = echarts.init(document.getElementById('myChart'))

			// 绘制图表
			myChart.setOption({
				title: {
			        text: '投票情况统计',
			        subtext: 'x:作品名    y:票数',
			        left: 'center'
			   	},
				color: ['#3398DB'],
				tooltip: {
					trigger: 'axis',
					axisPointer: { // 坐标轴指示器，坐标轴触发有效
						type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
					}
				},
				grid: {
					left: '3%',
					right: '8%',
					bottom: '3%',
					containLabel: true
				},
				xAxis: [{
					type: 'category',
					data: [],
					axisTick: {
						alignWithLabel: true
					}
				}],
				yAxis: [{
					type: 'value'
				}],
				series: [{
					name: '票数',
					type: 'bar',
					barWidth: '50%',
					data: []
				}]
			});
			var xname = []; //作品名数组（实际用来盛放X轴坐标值）
			var yname = []; //票数数组（实际用来盛放Y坐标值）

			debugger;
			var _this = this;
			this.voteId = "/voteRes/"+this.$route.params.id;
			axios.post('http://localhost:80/votediv/selectAll', ).then(function(response) {
				//请求成功时执行该函数内容，result即为服务器返回的json对象
				debugger;
				for(var i = 0; i < response.data.length; i++) {
					xname.push(response.data[i].voteItemName); //挨个取出类别并填入类别数组
				}
				for(var j = 0; j < response.data.length; j++) {
					yname.push(response.data[j].voteCount); //挨个取出销量并填入销量数组
				}
				myChart.setOption({ //加载数据图表					
					xAxis: {
						data: xname
					},
					series: [{
						data: yname
					}]
				});
			}).catch(function(error) {
				console.log(error);
			})
		}
	}
}</script>

<style scoped>
	.mint-header.is-fixed {
		height: 0.8rem;
	}

	.header {
		margin-bottom: 1rem;
	}
	#myChart{
		margin-top: 80px;
	}
</style>