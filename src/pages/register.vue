<template>
  <div class="register">
  	<div class="header">
			<mt-header fixed title="注册">
				<router-link to="/login" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</div>
		<div class="mint-content">
			<mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
			<hr />
			<mt-field label="密码:" placeholder="请输入密码" type="password" v-model="password"></mt-field>
			<hr />
			<div class="mui-content-padded">
				<button class="mui-btn-primary">注册</button>
				<div class="link-area">
					<router-link to="/login">已有账号</router-link>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'register',
  //设置数据对象
  data () {
    return {
      
    }
  }, 
  //数组或对象，用于接收来自父组件的数据
  props: [],//数组
  props: {},//对象
  //计算属性
  computed: {},
  //局部注册组件
  components:{},
  //事件处理器
  methods:{},
  //一个对象，键是需要观察的表达式，值是对应回调函数
  watch:{},
  //生命钩子函数:实例创建完成之后被调用
  created(){},
  //生命钩子函数:el被新创建的vm.$el替换，挂载到实例上
  mounted:{},
  //自定义局部指令
  directives:{},
  //过滤器
  filters:{}  
}
</script>

<style scoped>
.mui-input-group {
		margin-top: 3.5rem;
	}
	.mint-content{
		margin-top:3rem;
		margin-left:1rem;
		margin-right:1rem;
		border: solid 1px gainsboro;
		padding-top: 0.3rem;
		padding-bottom: 0.3rem;
	}
	hr{
		border: solid 1px gainsboro;
		width:95%;
	}
	.mui-content-padded{
		
	}
</style>
