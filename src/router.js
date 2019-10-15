import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      alias: '/questionnaire',
      name: 'questionnaire',
      component: () => import('./components/Home.vue')
    },
    {
      path: '/question/:id',
      name: 'question',
      component: () => import('./components/Question.vue')
    }
  ]
})
