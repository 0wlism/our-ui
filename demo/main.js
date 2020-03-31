import Vue from 'vue'
import App from './App.vue'
// import OurUi from '../src/index'
// import '../src/tailwindcss.css'

import '../lib/our-ui.min.css'
// import OurUi from '../lib/our-ui.min.js'

// console.log(OurUi);

// Vue.use(OurUi)

new Vue({
  el: '#app',
  render: h => h(App)
})

