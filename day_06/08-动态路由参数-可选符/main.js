import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


/*
动态路由参数可选符
问题：配了路由 path: "/search/:words" 为什么按下面步骤操作，会未匹配到组件，显示空白？
原因： /search/:words 表示，必须要传参数。如果不传参数，也希望匹配，可以加个可选符 "?"
*/