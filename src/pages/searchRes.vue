<template>
  <div class="search">
		<div class="back">
  		<mt-header fixed title="搜索">
			  <router-link to="/" slot="left">
			    <mt-button icon="back"></mt-button>
			  </router-link>
			</mt-header>
  	</div>
  	<!--搜索并返回结果，返回结果未实现-->
  	<div class="search box">
  		<mt-search v-model="value" :result.sync="result" autofocus show></mt-search>	
  	</div>
  	
  </div>
</template>

<script>
export default {
  name: 'search',
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
.back {
		margin-bottom: 0.8rem;
}

</style>
