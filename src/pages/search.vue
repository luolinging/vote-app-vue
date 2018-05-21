<template>
	<!-- 根据参赛作品（voteItemName）进行模糊查询 -->
	<div class="search">
		<div class="back">
			<mt-header fixed title="搜索">
				<router-link to="/" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</div>
		<!--搜索并返回结果，返回结果未实现-->
		<div class="div_sech">
			<mt-search autofoucs v-model="value" :result.sync="result" cancel-text="取消" placeholder="搜索" @keyup.enter.native="searchData">
				<div class="searchRes" v-for="item in result" style="margin-top: 130px;">
					<h1>{{item.voteItemName}}</h1>
					<img v-lazy="item.productionPic">
				</div>
			</mt-search>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	import qs from "qs"
	import axios from 'axios';
	export default {
		name: 'search',
		//设置数据对象
		data() {
			return {
				value: "",
				result: []
			}
		},
		computed: {

		},
		methods: {
			searchData() {
				/*debugger;*/
				var _this = this;
				axios.post('http://localhost:80/votediv/selectVoteDivByQuery',
						qs.stringify({
							voteItemName: _this.value,
						}))
					.then(function(response) {
						/*debugger;*/
						for(let i = 0; i <= response.data.map.value.length; i++) {
							/*debugger*/
							var tempArr = {};
							tempArr.id = response.data.map.value[i].id;
							tempArr.productionPic = "http://localhost:80/imgupload/" + response.data.map.value[i].productionPic;
							tempArr.voteItemName = response.data.map.value[i].voteItemName;
							tempArr.voteItemDecrib = response.data.map.value[i].voteItemDecrib;
							tempArr.voteCount = response.data.map.value[i].voteCount;

							_this.result.push(tempArr);
						}

					}).catch(function(error) {
						console.log(error)
					})
			}
		}

	}
</script>

<style scoped>
	.back {
		margin-bottom: 1rem;
	}
	
	.mint-header.is-fixed {
		position: absolute;
		height: 0.8rem;
		margin-bottom: 4rem;
	}
	
	.mint-search-list {
		position: relative;
		margin-top: 1.75rem;
		border: 1px solid red;
	}
	
	img {
		width: 100%;
	}
	.mint-searchbar-core{
		
	}
	.input[type=search]{
		margin-bottom: 0;
	}

</style>