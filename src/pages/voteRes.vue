<template>
  <div>
    <div class="vote-record">
      <div class="header">
        <mt-header fixed title="投票结果">
          <router-link to="/playerDetail" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
          <router-link to="/resChart" slot="right">
            <mt-button >图像分析</mt-button>
          </router-link>
        </mt-header>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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

</style>
