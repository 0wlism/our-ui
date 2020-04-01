import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Loading from '../demo/pages/Loading.vue'
import GoTop from '../demo/pages/GoTop.vue'


export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/gotop'
    },
    {
      path: '/loading',
      component: Loading
    },
    {
      path: '/gotop',
      component: GoTop
    }
  ]
})

