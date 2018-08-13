// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Button } from 'mint-ui';


import App from './App'
import router from './router'
import Split from './components/Split/Split'

Vue.config.productionTip = false
//注册全局组件
Vue.component('Split', Split)
Vue.component(Button.name, Button);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
