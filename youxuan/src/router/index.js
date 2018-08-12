import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home'
import Classify from '../pages/Classify/Classify'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'
import Recognize from '../pages/Recognize/Recognize'
import ShopCart from '../pages/ShopCart/ShopCart'


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component:Home
    },
    {
      path: '/classify',
      component:Classify
    },
    {
      path: '/shopcart',
      component:ShopCart
    },
    {
      path: '/login',
      component:Login
    },
    {
      path: '/profile',
      component:Profile
    },
    {
      path: '/recognize',
      component:Recognize
    }
  ]
})
