import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


/*
声明式导航 - 跳转传参
目标：在跳转路由时, 进行传值

1. 查询参数传参
① 语法格式如下
to="/path?参数名=值"
② 对应页面组件接收传递过来的值
$route.query.参数名

如果是在JS中使用，需要加this
即 this.$route.query.参数名
*/