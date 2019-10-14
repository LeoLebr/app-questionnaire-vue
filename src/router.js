import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'questionnaire',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/question',
      name: 'question'
    }
  ]
})
