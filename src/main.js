// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
/*import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css';*/
/*按需引入组件，此时引入按钮*/
import Button from 'mint-ui/lib/button';
Vue.component(Button.name, Button);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
