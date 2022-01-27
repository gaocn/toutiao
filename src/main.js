import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
// 加载vant全局样式
import 'vant/lib/index.css'
// 加载全局样式文件
import './styles/index.less'
// REM全局动态自适应
import 'amfe-flexible'

Vue.config.productionTip = false
Vue.use(Vant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
