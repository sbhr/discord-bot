import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddForm from '@/components/AddForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/add',
      name: 'addForm',
      component: AddForm
    }
  ]
})
