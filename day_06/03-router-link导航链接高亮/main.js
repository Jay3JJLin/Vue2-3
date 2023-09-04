import Vue from 'vue'
import App from './App.vue'

import router from './router/index'

new Vue({
  render: h => h(App),
  router: router  // 键和值相同，可以简写为router
}).$mount('#app')



/*
声明式导航 - 导航链接
需求：实现导航高亮效果
vue-router 提供了一个全局组件 router-link (取代 a 标签)
① 能跳转，配置 to 属性指定路径(必须) 。本质还是 a 标签 ，to 无需 #
② 能高亮，默认就会提供高亮类名，可以直接设置高亮样式

1. router-link是什么?
vue-router提供的全局组件, 用于替换 a 标签
2. router-link怎么用?
<router-link to="/路径值" ></router-link>
必须传入to属性, 指定路由路径值
3. router-link好处?
能跳转，能高亮 (自带激活时的类名)
*/