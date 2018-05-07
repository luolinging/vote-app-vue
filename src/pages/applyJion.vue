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
      <div class="detail">
        <mt-field label="姓名:" placeholder="请输入姓名" v-model="username"></mt-field>
        <hr />
        <mt-field label="邮箱:" placeholder="请输入邮箱"  v-model="email"></mt-field>
        <hr />
      </div>
      <div class="uploadworks">
        <span>上传作品：</span>
        <input ref="file"
               type="file"
               class="file-input"
               accept="image/*"
               :multiple="multiple"
               @change="change"/>
      </div>
      <div>
        <mt-cell title="作家简介："></mt-cell>
				<mt-field class="authorjj" type="textarea" rows="10" v-model="zpdetail"></mt-field>
      </div>
      <div class="btntj">
        <mt-button size="large" type="primary" @click.native="handleClick">提交</mt-button>
      </div>

    </div>



  </div>
</template>

<script>
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
      username:"",
      email:""
    };
  },
  mounted() {
    this.getDom();
  },
  methods: {
    /*提交报名事件*/
    handleClick(){

    },
    // 获取dom元素外部点击触发
    getDom() {
      let file = this.$refs.file;
      this.$emit('refDom', file);
    },
    // 图片数量是否超过max张
    isOutNumber(files) {
      const MAX = this.max;
      if (files.length > MAX) {
        MessageBox({
          title: '提示',
          message: '一次最多允许上传${MAX}张！'
        });
        return true;
      } else {
        return false;
      }
    },
    change(e) {
      let files = e.target.files;
      // 如果超过设定的张数张，提示
      if (this.isOutNumber(files)) {
        return;
      };
      let len = files.length;
      for (let i = 0; i < len; i++) {
        if (window.FileReader && files[i]) {
          if (files[i].size <= MAX_SIZE) {
            Indicator.open();
            // 读取文件转化图片base64
            let fr = new FileReader();
            let self = this;
            fr.onload = (e) =>{
              let w = 300;
              let h = 300;
              let file = files[i];
              let compressPic = function (base64) {
                // 将压缩处理后的图片传递出去
                self.$emit('fileChange', {base64, file, files});
              };
              self.canvasDataUrl(e.target.result, w, h, compressPic);
            }
            fr.onerror = (e) =>{
              Indicator.close();
            };
            fr.readAsDataURL(files[i]);
          } else {
            MessageBox({
              title: '警告',
              message: '${files[i].name}图片尺寸过大，图片请小于7M！'
            });
          }
        }
      };
    },
    //  利用canvas压缩图片
    canvasDataUrl(data, w, h, callback) {
      let newImg = new Image();
      newImg.src = data;
      let imgWidth, imgHeight;
      newImg.onload = () =>{
        let img = document.createElement('img');
        img.src = newImg.src;
        imgWidth = img.width;
        imgHeight = img.height;
        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');
        if (imgWidth > imgHeight) {
          imgWidth = w * imgWidth / imgHeight;
          imgHeight = h;
        } else {
          imgHeight = h * imgHeight / imgWidth;
          imgWidth = w;
        };
        canvas.width = imgWidth;
        canvas.height = imgHeight;
        ctx.clearRect(0, 0, w, h);
        // 处理png格式图片背景变黑的问题
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, imgWidth, imgHeight);
        let rate = 0.7;
        let base64 = canvas.toDataURL('image/jpeg', rate);
        callback(base64);
      };
    }
  }
}
</script>

<style scoped>
  .apply_jion{
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
