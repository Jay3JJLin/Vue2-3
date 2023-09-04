import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


/*
编程式导航-基本跳转
编程式导航：用JS代码来进行跳转
两种语法:
① path 路径跳转 (简易方便)
this.$router.push('路由路径')
this.$router.push({
path: '路由路径'
})

② name 命名路由跳转 (适合 path 路径长的场景)
this.$router.push({
name: '路由名'
})
{ name: '路由名', path: '/path/xxx', component: XXX },
*/