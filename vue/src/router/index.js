import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddForm from '@/components/AddForm'
import UpdateForm from '@/components/UpdateForm'

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
    },
    {
      path: '/update/:id',
      name: 'updateForm',
      component: UpdateForm
    }
  ]
})
