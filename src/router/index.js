import Vue from 'vue'
import Router from 'vue-router'
import landingPage from '@/components/pages/landingPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: landingPage
    }
  ]
})
