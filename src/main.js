import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

axios.defaults.withCredentials=true;
Vue.config.productionTip = false;
//给vue原型挂载一个属性
Vue.prototype.$ajax = axios

import echarts from 'echarts'
Vue.use(echarts);
// 4.0 mint-ui的使用
// 4.0.1 导入mint-ui的样式
import 'mint-ui/lib/style.min.css'
// 4.0.2 导入mint-ui的组件包
import mintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 4.0.3 将mintUI对象在Vue中通过use()进行绑定
Vue.use(mintUI);
// 6.0.1 导入vue-resource
import vueResource from 'vue-resource'
// 6.0.2 使用

import { DatetimePicker } from 'mint-ui';
import VueLazyLoad from 'vue-lazyload';
import { Button ,Search ,Field ,Lazyload} from 'mint-ui';
import { Cell } from 'mint-ui';


Vue.component(Cell.name, Cell);
Vue.use(Lazyload);
Vue.component(Field.name, Field);
Vue.component(Search.name, Search);
Vue.component(Button.name, Button);
Vue.use(VueLazyLoad);
Vue.component(DatetimePicker.name, DatetimePicker);
Vue.use(vueResource);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
