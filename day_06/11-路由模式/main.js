import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


/*
Vue路由 - 模式设置
问题: 路由的路径看起来不自然, 有#，能否切成真正路径形式?
hash路由(默认) 例如: http://localhost:8080/#/home
history路由(常用) 例如: http://localhost:8080/home (以后上线需要服务器端支持)
*/