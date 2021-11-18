import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from 'components/Home'
import About from 'components/About'
import HomeChild from 'components/HomeChild'

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/',
      redirect: "/home"
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'homechild',
          component: HomeChild
        }
      ]
    },
    {
      path: '/about',
      component: About
    }
  ]
})