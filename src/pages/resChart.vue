<template>
	<div class="res-chart">
		<div class="vote-record">
			<div class="header">
				<mt-header fixed title="图像分析">
					<router-link to="/voteRes" slot="left">
						<mt-button icon="back"></mt-button>
					</router-link>
				</mt-header>
			</div>
		</div>
		<div class="charts" id="myChart" :style="{width: '345px', height: '500px'}">
		</div>
	</div>
</template>

<script>
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
						text: '投票结果',
						subtext: '饼状图',
						x: 'center'
					},
					tooltip: {
						trigger: 'item',
						formatter: "{a}<br/>{b}:{c}({d}%)"
					},
					series: [{
						name: '票数',
						type: 'pie',
						radius: '50%',
						center: ['45%', '45%'],
						data: [{							
								value: 335,
								name: '灵峰白梅'
							},
							{
								value: 310,
								name: '梦的远方'
							},
							{
								value: 102,
								name: '感知非现实'
							},
							{
								value: 300,
								name: '蜷缩的人'
							},
							{
								value: 49,
								name: '红扇舞'
							},
							{
								value: 12,
								name: '忘情'
							},
							{
								value: 20,
								name: '鸭子'
							},
							{
								value: 42,
								name: '忆江南'
							},
							{
								value: 53,
								name: '春·日·光'
							},
							{
								value: 20,
								name: '思空'
							},
							{
								value: 132,
								name: '远方'
							},
							{
								value: 423,
								name: '门口'
							},
							{
								value: 600,
								name: '夜·烧烤'
							}
						],
						itemStyle: {
							emphasis: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}]
				});
			}
		}
	}
</script>

<style scoped>
	.mint-header.is-fixed{
		height:0.8rem;
	}	
	.header {
		margin-bottom: 1rem;
	}

</style>