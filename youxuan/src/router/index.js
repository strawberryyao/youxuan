import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home'
import Classify from '../pages/Classify/Classify'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'
import Recognize from '../pages/Recognize/Recognize'
import ShopCart from '../pages/ShopCart/ShopCart'
import Interlayer from '../pages/Interlayer/Interlayer'
import DownloadApp from '../components/DownloadApp/DownloadApp'
import Search from '../pages/Search/Search'


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component:Home,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/classify',
      component:Classify,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/shopcart',
      component:ShopCart,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/login',
      component:Login
    },
    {
      path: '/profile',
      component:Profile,
      meta:{
        showFooter:false
      }
    },
    {
      path: '/recognize',
      component:Recognize,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/interlayer',
      component:Interlayer
    },
    {
      path:'/downloadapp',
      component:DownloadApp,
      redirect:'/home'
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})
