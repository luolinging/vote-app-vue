<template>
  <div class="my">
  	<div class="back">
  		<router-link to="/" slot="left">
    		<mt-button icon="back">返回</mt-button>
  		</router-link>
  	</div>
  	<div class="zh">
  		账号名
  		{{account}}
  	</div>
  	<div class="zx">
  		<router-link to="/login">
    		<mt-button size="small" type="primary">注销</mt-button>
  		</router-link>
  	</div>
  	<div class="myvote">
  		<router-link to="/myVoteRecord">
    		<mt-button size="small" type="primary">我的投票</mt-button>
  		</router-link>
  	</div>
  	<div class="bm">
  		<router-link to="/applyJion">
    		<mt-button size="small" type="primary">报名</mt-button>
  		</router-link>
  	</div>
  	<div class="settings">
  		<router-link to="/settings">
    		<mt-button size="small" type="primary">设置</mt-button>
  		</router-link>
  	</div>
  </div>
</template>

<script>
import login from '../pages/login.vue';
import myVoteRecord from '../pages/myVoteRecord.vue';
import applyJion from '../pages/applyJion.vue';
import settings from '../pages/settings.vue';
export default {
  name: 'my',
  //设置数据对象
  data () {
    return {
      account:''
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
  methods:{
  	settingsClick(){
  		
  	}
  },
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
	.zh{
		margin-top: 1.5rem;
		margin-bottom: 1.5rem;
		margin-left: 0.4rem;
	}

.mint-button--small{
	width: 2rem;
	height: 0.75rem;
	margin: 0.4rem;
}
</style>
