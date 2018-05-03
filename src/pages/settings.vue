<template>
  <div class="settings">
    <div class="header">
      <mt-header fixed title="登录">
        <router-link to="/my" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="main">
      <div class="topselected">
        <mt-cell title="账号" value="罗玲玲" is-link></mt-cell>
        <mt-cell title="修改密码" value="" is-link></mt-cell>
        <mt-cell title="邮箱" value="luoling_luo@163.com" is-link></mt-cell>
      </div>
      <div class="bottomselected">
        <mt-cell title="关于APP" value="" is-link></mt-cell>
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
  }
}
</script>

<style scoped>
  .settings .main{
    margin-top: 1rem;
  }
  .main .topselected{
    padding-bottom: 0.5rem;
  }

</style>
