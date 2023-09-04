import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


/*
Vue路由 - 重定向
问题：网页打开， url 默认是 / 路径，未匹配到组件时，会出现空白
说明：重定向 → 匹配path后, 强制跳转path路径
语法： { path: 匹配路径, redirect: 重定向到的路径 },
*/