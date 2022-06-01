import Vue from 'vue'
import Router from 'vue-router'
import Main from '../main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/subject',
      name: 'Subject',
      component: () => import('../main/Subject/indexSubject.vue'),
      meta: { Main: false }
    },
    {
      path: '/beauty',
      name: 'Beauty',
      component: () => import('../main/Beauty/indexBeauty.vue'),
      meta: { Main: false }
    },
    {
      path: '/own',
      name: 'Own',
      component: () => import('../main/Own/indexOwn.vue'),
      meta: { Main: false }
    },

  ]
})

