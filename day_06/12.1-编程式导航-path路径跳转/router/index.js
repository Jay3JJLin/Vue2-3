import Home from '@/views/Home'
import Search from '@/views/Search'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) // VueRouter插件初始化

import NotFound from '@/views/NotFound.vue'

// 创建了一个路由对象
const router = new VueRouter({
  // mode: 'hash', // 默认hash 带#
  // 注意：一旦采用了history模式,地址栏就没有#,需要后台配置访问规则
  mode: 'history', 
  routes: [
    // path: "*" (任意路径) – 前面不匹配就命中最后这个 -> 配在路由最后
    { path: '/', redirect: '/home' }, // 类似于替换，前面匹配要替换的，后面为替换的路径
    { path: '/home/', component: Home },
    { path: '/search/:words?', component: Search },
    { path: '*', component: NotFound }
  ]
})

export default router