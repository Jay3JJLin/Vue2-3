import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


/*
2. name 命名路由跳转
① query传参
this.$router.push({
name: '路由名字',
query: {
参数名1: '参数值1',
参数名2: '参数值2'
}
})

② 动态路由传参 (需要配动态路由)
this.$router.push({
name: '路由名字',
params: {
参数名: '参数值',
}
})


小结：
两种传参方式：查询参数 + 动态路由传参
两种跳转方式，对于两种传参方式都支持

path路径跳转: 简易方便，适合路径名较短的
name命名路由跳转: 适合 path 路径长的场景

query传参：适合多个参数
动态路由传参：适合单个参数
*/