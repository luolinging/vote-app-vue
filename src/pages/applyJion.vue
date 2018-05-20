<template>
	<div class="apply_jion">
		<div class="header">
			<mt-header fixed title="报名">
				<router-link to="/my" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</div>
		<div class="main">
			<!--<div class="detail">
				<mt-field label="编号:" placeholder="请输入自己输入编号" v-model="userId"></mt-field>
				<mt-field label="作品名:" placeholder="请输入作品名称" v-model="voteItemName"></mt-field>
			</div>
			<div class="uploadworks">
				<form action="http://localhost:80/uploadimg" >
				<span>上传作品：</span>
				<input 
					id="fileId" 
					type="file" 
					name="uploadFileName" 
					multiple="multiple" 
					@change="uploadFile" 
					accept="image/jpg,image/png">
				</input>
				<img :src="productionPicUrl">
				</form>
			</div>
			<div>
				<mt-cell title="作品简介："></mt-cell>
				<mt-field class="authorjj" type="textarea" rows="5" v-model="voteItemDecrib"></mt-field>
			</div>
			<div class="btntj">
				<mt-button size="large" type="primary" @click.native="handleClick">提交</mt-button>
			</div>-->

				<input type="text" value="" v-model="userId" placeholder="请输入编号" />
				<input type="text" value="" v-model="voteItemName" placeholder="请输入作品名" />
				<span>作品简介：</span>
				<input type="textarea" value="" v-model="voteItemDecrib" /></br>
				<input type="file" @change="getFile($event)" /></br>
				<button @click="submitForm">提交</button>
		</div>
	</div>
</template>

<script>
	import qs from "qs"
	import axios from 'axios';
	import { Indicator, MessageBox } from 'mint-ui';
	export default {
		name: 'applyJion',
		data() {
			return {
				userId: "",
				voteItemName: "",
				voteItemDecrib: "",
				productionPic: "",
				uri: ""
			}
		},
		methods: {
			getFile(e) {
				let file = e.target.files[0];
				let param = new FormData(); //创建form对象
				param.append('file', file, file.name); //通过append向form对象添加数据
				console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
				//添加请求头
				let config = {
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				};
				axios.post('http://localhost:80/uploadimg', param, config)
					.then(response => {
						console.log(response.data);
						this.uri = response.data;
					})

			},
			submitForm() {
				var _this = this;
				debugger
				axios.post('http://localhost:80/votediv/insert', qs.stringify({
						userId: _this.userId,
						voteItemName: _this.voteItemName,
						voteItemDecrib: _this.voteItemDecrib,
						productionPic: _this.uri
					}))
					.then(function(res) {
						debugger;
						if(res.data.success) {
							alert("报名成功！");
							_this.$router.push("/home");
						}else{
							alert(res.data.errorMessage);
						}

					})
			}

		}
	}
</script>

<style scoped>
	@import url("http://localhost:8081/static/css/mui.min.css");
	@import url("http://localhost:8081/static/css/style.css");
	.mint-header.is-fixed {
		height: 0.8rem;
	}
	
	.apply_jion {
		margin-top: 1.5rem;
	}
	
	.file-input {
		margin-top: 0.25rem;
		margin-left: 1.7rem;
		width: 100%;
	}
	
	span {
		display: block;
		margin-top: 0.20rem;
	}
	
	textarea {
		margin-top: 0.5rem;
		margin-left: 0.1rem;
	}
	
	.btntj {
		margin-top: 0.5rem;
	}
	
	.authorjj {
		margin-top: 0.2rem;
		border: solid 1px #acacb4;
	}
</style>