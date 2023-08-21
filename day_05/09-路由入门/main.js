import Vue from 'vue'
import App from './App.vue'

/*
路由的使用步骤 5 + 2
5个基础步骤
1. 下载 v3.6.5   yarn add vue-router@3.6.5
2. 引入 import
3. 安装注册 Vue.use(Vue插件)
4. 创建路由对象 new VueRouter()
5. 注入到new Vue中，建立关联

2个核心步骤
1. 建组件(views目录)，配规则
2. 准备导航链接，配置路由出口(匹配的组件展示的位置) 
*/

import VueRouter from 'vue-router'
import Find from './views/Find.vue'
import My from './views/My.vue'
import Friend from './views/Friend.vue'


Vue.config.productionTip = false
Vue.use(VueRouter) // VueRouter 插件初始化


const router = new VueRouter({
  // routes 路由规则(们)
  // route 一条路由规则 { path: 地址栏路径, component: 组件 }
  routes: [
    // 地址栏路径path和组件component 一一对应
    // 注意：这里的path是地址栏的绝对路径，不是相对路径，所以不要加点
    { path: '/find', component: Find },
    { path: '/my', component: My },
    { path: '/friend', component: Friend },
  ]
})

new Vue({
  render: h => h(App),
  router: router  // 键和值相同，可以简写为router
}).$mount('#app')



/*
1. 什么是单页面应用程序:SPA - Single Page Application?
所有功能在一个html页面上实现
2. 单页面应用优缺点?
优点：按需更新性能高，开发效率高，用户体验好
缺点：学习成本，首屏加载慢，不利于SEO
3. 应用场景？
系统类网站 / 内部网站 / 文档类网站 /移动端站点

1. 什么是路由？
路由是一种映射关系
2. Vue中的路由是什么?
路径 和 组件 的映射关系
根据路由就能知道不同路径的，应该匹配渲染哪个组件

总结：
1. 如何实现 路径改变，对应组件 切换？
Vue 官方插件 VueRouter
2. VueRouter 的使用基本步骤? (5 + 2)
5个基础步骤
① 下包 ② 引入 ③ Vue.use 安装注册
④ 创建路由对象 ⑤ 注入Vue实例
2个核心步骤
① 创建组件，配置规则 (路径组件的匹配关系 )
② 配导航，配置路由出口 router-view (组件展示的位置)


组件存放目录问题 (组件分类)
1. 组件分类： .vue文件分2类； 页面组件 & 复用组件   注意：都是 .vue文件 (本质无区别)
2. 分类开来 更易维护
src/views文件夹
  页面组件 - 页面展示 - 配合路由用
  Home.vue (首页)   Category.vue (分类页)
src/components文件夹
  复用组件 - 展示数据 - 常用于复用
  Product.vue (商品组件)  Comment.vue (评价组件)
3. 小结：
  1. 组件分类有哪两类？分类的目的？
  页面组件 和 复用组件，便于维护
  2. 放在什么文件夹？作用分别是什么？
  页面组件 - views文件夹 => 配合路由，页面展示
  复用组件 - components文件夹 => 封装复用
*/