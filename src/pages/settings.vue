<template>
	<div class="settings">
		<div class="header">
			<mt-header fixed title="设置">
				<router-link to="/my" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</div>
		<div class="main">
			<div class="topselected">
				<router-link to="/userDetail">
					<mt-cell title="账号" is-link></mt-cell>
				</router-link>
				<router-link to="/modifyPwd">
					<mt-cell title="修改密码" is-link></mt-cell>
				</router-link>
			</div>
			<div class="bottomselected">
				<router-link to="/aboutApp">
				<mt-cell title="关于APP" is-link></mt-cell>
				</router-link >
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		//设置数据对象
		data() {
			return {
				username: '',
				pwd: '',
				email: ''
			}
		},
		created() {

		}
	}
</script>

<style scoped>
	.mint-header.is-fixed {
		height: 0.8rem;
	}
	
	.settings .main {
		margin-top: 1rem;
	}
	
	.main .topselected {
		padding-bottom: 0.2rem;
	}
	
	.mint-cell {
		margin-top: 0.03rem;
	}
</style>