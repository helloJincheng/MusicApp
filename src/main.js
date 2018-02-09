import Vue from 'vue'
import App from './App'
import 'babel-polyfill'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import Fastclick from 'fastclick'

/* 点击延长处理 */
Fastclick.attach(document.body)

/* 来关闭生产模式下给出的提示 */
Vue.config.productionTip = false
Vue.use(MuseUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
