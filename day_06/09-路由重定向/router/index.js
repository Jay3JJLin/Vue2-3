import Home from '@/views/Home'
import Search from '@/views/Search'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) // VueRouter插件初始化

// 创建了一个路由对象
const router = new VueRouter({
  routes: [
    // 路由重定向 { path: 匹配路径, redirect: 重定向到的路径 }
    { path: '/', redirect: '/home' }, // 类似于替换，前面匹配要替换的，后面为替换的路径
    { path: '/home/', component: Home },
    { path: '/search/:words?', component: Search }
  ]
})

export default router