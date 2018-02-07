import Vue from 'vue'
import App from './App'
import router from './router'

import Fastclick from 'fastclick'

/* 点击延长处理 */
Fastclick.attach(document.body)

/* 来关闭生产模式下给出的提示 */
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
