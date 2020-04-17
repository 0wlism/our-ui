import Vue from 'vue'
import App from './App.vue'
import router from '../router'

// dev开发
import OurUi from '../src/index'

// 测试lib（由于异步加载组件，css和js被分离了，所以这里开发测试不了）
// import '../lib/our-ui.min.css'
// import OurUi from '../lib/our-ui.min.js'

// 全局引入
Vue.use(OurUi)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

