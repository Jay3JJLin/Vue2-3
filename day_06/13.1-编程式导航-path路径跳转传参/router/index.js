import Home from '@/views/Home'
import Search from '@/views/Search'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) // VueRouter插件初始化

import NotFound from '@/views/NotFound.vue'

// 创建了一个路由对象
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/home' }, // 类似于替换，前面匹配要替换的，后面为替换的路径
    { path: '/home', component: Home },
    // 注意：在query查询传参时，不要写:words
    { name: 'search', path: '/search/:words', component: Search }, // 给跳转到的页面加name
    // path: "*" (任意路径) – 前面不匹配就命中最后这个 -> 配在路由最后
    { path: '*', component: NotFound }
  ]
})

export default router