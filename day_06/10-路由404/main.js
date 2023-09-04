import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


/*
Vue路由 - 404
作用：当路径找不到匹配时，给个提示页面
位置：配在路由最后
语法：path: "*" (任意路径) – 前面不匹配就命中最后这个
*/