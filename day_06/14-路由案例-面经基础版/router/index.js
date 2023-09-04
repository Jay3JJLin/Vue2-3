import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout.vue'
import ArticleDetail from '@/views/ArticleDetail.vue'
import Article from '@/views/Article.vue'
import Collect from '@/views/Collect.vue'
import Like from '@/views/Like.vue'
import User from '@/views/User.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  // /article 路径 → Article组件
  routes: [
    // 首页
    {
      path: '/',
      component: Layout,
      redirect: '/article', // 初始页面为面经article
      
      // 二级路由对应的组件渲染到哪个一级路由下，children就配置到哪个路由下边
      // 通过 children 配置项，可以配置嵌套子路由
      // 1. 在children配置项中，配规则
      // 2. 准备二级路由出口(在Layput里面配置出口，为children的出口)
      children: [
        {
          path: '/article',
          component: Article
        },
        {
          path: '/collect',
          component: Collect
        },
        {
          path: '/like',
          component: Like
        },
        {
          path: '/user',
          component: User
        },
      ]
    },
    // 面经详情
    {
      // 动态路由传参，先改造路由
      path: '/detail/:id',
      component: ArticleDetail
    }
  ]
})

export default router 