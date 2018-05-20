import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

axios.defaults.withCredentials=true;

import echarts from 'echarts'
import 'mint-ui/lib/style.min.css'
import mintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import vueResource from 'vue-resource'
import { DatetimePicker } from 'mint-ui';
import VueLazyLoad from 'vue-lazyload';
import { Button ,Search ,Field ,Lazyload} from 'mint-ui';
import { Cell } from 'mint-ui';

Vue.use(ElementUI);
Vue.config.productionTip = false;
//给vue原型挂载一个属性
Vue.prototype.$ajax = axios
Vue.component(Cell.name, Cell);
Vue.use(Lazyload);
Vue.component(Field.name, Field);
Vue.component(Search.name, Search);
Vue.component(Button.name, Button);
Vue.use(VueLazyLoad);
Vue.component(DatetimePicker.name, DatetimePicker);
Vue.use(vueResource);
// 4.0.3 将mintUI对象在Vue中通过use()进行绑定
Vue.use(mintUI);
Vue.use(echarts);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
