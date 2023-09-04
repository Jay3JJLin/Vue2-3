import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


/*
1. path 路径跳转
① query传参
this.$router.push('/路径?参数名1=参数值1&参数2=参数值2')
this.$router.push({
path: '/路径',
query: {
参数名1: '参数值1',
参数名2: '参数值2'
}
})

② 动态路由传参 (需要配动态路由)
this.$router.push('/路径/参数值')
this.$router.push({
path: '/路径/参数值'
})
*/