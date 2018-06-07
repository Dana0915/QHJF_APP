import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/login',
        meta: {
          title: '登录'
        },
        component: resolve => require(['../view/other/login'], resolve)
      }, {
      path: 'home',
      component: Home,
      children: [{
        path: '/',
        meta: {
          title: '首页'
        },
        component: resolve => require(['../view/home/index'], resolve)
      }, 
    ]
    }, {
      path: 'financial',
      component: Home,
      children: [{
        path: '/',
        meta: {
          title: '理财'
        },
        component: resolve => require(['../view/financial/index'], resolve)
      }, 
    ]
    }, {
      path: 'find',
      component: Home,
      children: [{
        path: '/',
        meta: {
          title: '发现'
        },
        component: resolve => require(['../view/find/index'], resolve)
      }, 
    ]
    },{
      path: 'money',
      component: Home,
      children: [{
        path: '/',
        meta: {
          title: '资产'
        },
        component: resolve => require(['../view/money/index'], resolve)
      }, 
    ]
    },  
     
  ]
    }
  ]
})
