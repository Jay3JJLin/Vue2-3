import Vue from 'vue'
import App from './App.vue'

import router from './router/index'

new Vue({
  render: h => h(App),
  router: router  // 键和值相同，可以简写为router
}).$mount('#app')



/*
路由模块的封装抽离的好处是什么？
拆分模块，利于维护
以后如何快速引入组件？
基于 @ 指代 src 目录，从 src 目录出发找组件
*/