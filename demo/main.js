import Vue from 'vue'
import App from './App.vue'

// dev开发
import '../src/tailwindcss.css'
import OurUi from '../src/index'

// 测试lib
// import '../lib/our-ui.min.css'
// import OurUi from '../lib/our-ui.min.js'

// 全局引入
Vue.use(OurUi)

new Vue({
  el: '#app',
  render: h => h(App)
})

