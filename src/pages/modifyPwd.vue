<template>
  <div class="modifyPwd">
    <div class="header">
      <mt-header fixed title="修改密码">
        <router-link to="/my" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="main">
      <div class="detail">
      	<p>旧密码:</p>
        <mt-field placeholder="请输入旧的密码" v-model="oldPwd"></mt-field>
        <p>新密码:</p>
        <mt-field placeholder="请输入新的密码"  v-model="newPwd"></mt-field>
      </div>
      <div class="btntj">
        <mt-button size="large" type="primary" @click.native="handleClick">确定</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import qs from "qs"
  import axios from 'axios';
  import {Indicator, MessageBox} from 'mint-ui';
  //  M设定可以上传图片的大小
  const M = 10;
  const UNIT = 1024;
  const MAX_SIZE = M * UNIT * UNIT;
export default {
  name: 'applyJion',
  //设置数据对象
  /**
   * @member {Object}
   * @name props
   * @property {Boolean} multiple 是否可以同时上传多个文件
   * @property {Number} max 最多一次可以上传多少张
   */
  props: {
    multiple: Boolean,
    max: Number
  },
  data() {
    return {
      oldPwd:"",
      newPwd:""
    }
  },
  methods: {
    /*提交报名事件*/
    handleClick(){
      debugger;
      var _this=this;
        axios.post('http://localhost:80/user/updatePsw',
          qs.stringify({          	
							oldPsw:this.oldPwd,
							newPsw:this.newPwd
          })
        ).then(function(response) {
          debugger;
          if(response.data.success) {
            alert("修改成功！");
            _this.$router.push("/my")
          }
        }).catch(function(error) {
						console.log(error)
        })
    }    
  }
}
</script>

<style scoped>
	@import url("http://localhost:8081/static/css/mui.min.css");
	@import url("http://localhost:8081/static/css/style.css");
	.mint-header.is-fixed{
		height:0.8rem;
	}	
  .modifyPwd{
    margin-top: 1.5rem;
  }
  .file-input{
    margin-top: 0.25rem;
    margin-left: 1.7rem;
    width:100%;
  }
  span{
    display: block;
    margin-top: 0.20rem;
  }
  textarea{
    margin-top: 0.5rem;
    margin-left: 0.1rem;
  }
  .btntj{
    margin-top: 0.5rem;
  }
  .authorjj{
  	margin-top: 0.2rem;
  	border: solid 1px #acacb4;
  }
</style>
