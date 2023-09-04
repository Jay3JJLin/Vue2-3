import Vue from 'vue'
import App from './App.vue'

import router from './router/index'

new Vue({
  render: h => h(App),
  router: router  // 键和值相同，可以简写为router
}).$mount('#app')



/*
如何自定义 router-link 的 两个高亮类名？
linkActiveClass 模糊匹配 类名自定义
linkExactActiveClass 精确匹配 类名自定义
*/