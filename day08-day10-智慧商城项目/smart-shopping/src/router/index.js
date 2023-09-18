import Vue from 'vue'
import VueRouter from 'vue-router'
// 默认加载
import Layout from '@/views/layout'
import Home from '@/views/layout/home.vue'
import CateGory from '@/views/layout/category.vue'
import Cart from '@/views/layout/cart.vue'
import User from '@/views/layout/user.vue'

import store from '@/store'

// 按需加载改造，提高访问效率
const Login = () => import('@/views/login')
const Search = () => import('@/views/serach')
const SearchList = () => import('@/views/serach/list')
const ProDetail = () => import('@/views/prodetail')
const Pay = () => import('@/views/pay')
const MyOrder = () => import('@/views/myorder')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    {
      path: '/',
      component: Layout,
      redirect: '/home', // 一进页面就展示首页，所以重定向
      // 二级路由配置
      children: [
        { path: '/home', component: Home },
        { path: '/category', component: CateGory },
        { path: '/cart', component: Cart },
        { path: '/user', component: User }
      ]
    },
    { path: '/search', component: Search },
    { path: '/searchlist', component: SearchList },
    // 动态路由传参，确认将来是哪个商品，路由参数中携带 id
    { path: '/prodetail/:id', component: ProDetail },
    { path: '/pay', component: Pay },
    { path: '/myorder', component: MyOrder }
  ]
})

// 所有的路由在真正被访问到之前(解析渲染对应组件页面前)，都会先经过全局前置守卫
// 只有全局前置守卫放行了，才会到达对应的页面

// 全局前置导航守卫
// to:   到哪里去，到哪去的完整路由信息对象 (路径，参数)
// from: 从哪里来，从哪来的完整路由信息对象 (路径，参数)
// next(): 是否放行
// (1) next()     直接放行，放行到to要去的路径
// (2) next(路径)  进行拦截，拦截到next里面配置的路径

// 定义一个数组，专门用户存放所有需要权限访问的页面
const authUrls = ['/pay', '/myorder']

router.beforeEach((to, from, next) => {
  // console.log(to, from, next)
  // 看 to.path 是否在authUrls中出现过
  if (!authUrls.includes(to.path)) {
    // 非权限页面,直接放行
    next() // 放行
  } else {
    // 是权限页面，需要判断token
    const token = store.getters.token
    if (token) {
      next()
    } else {
      // 没有token 则拦截到login登录页
      next('/login')
    }
  }
})

export default router
