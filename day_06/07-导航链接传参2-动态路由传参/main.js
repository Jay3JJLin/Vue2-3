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

2. 动态路由传参
① 配置动态路由
② 配置导航链接
to="/path/参数值"
③ 对应页面组件接收传递过来的值
$route.params.参数名


两种传参方式的区别
1. 查询参数传参 (比较适合传多个参数)
① 跳转：to="/path?参数名=值&参数名2=值"
② 获取：$route.query.参数名
2. 动态路由传参 (优雅简洁，传单个参数比较方便)
① 配置动态路由：path: "/path/参数名"
② 跳转：to="/path/参数值"
③ 获取：$route.params.参数名


小结：
声明式导航跳转时, 有几种方式传值给路由页面?
① 查询参数传参 (多个参数)
跳转：to="/path?参数名=值"
接收：$route.query.参数名
② 动态路由传参 (简洁优雅)
路由： /path/:参数名
跳转： to="/path/值"
接收：$route.params.参数名


动态路由参数可选符
问题：配了路由 path: "/search/:words" 为什么按下面步骤操作，会未匹配到组件，显示空白？
原因： /search/:words 表示，必须要传参数。如果不传参数，也希望匹配，可以加个可选符 "?"
*/