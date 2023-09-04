import Vue from 'vue'

import VueRouter from 'vue-router'

// 移动后，路径也会发生变化
// 为了便于维护，应当使用绝对路径 @   相当于这里的src,再往下找 
import Find from '@/views/Find.vue'
import My from '@/views/My.vue'
import Friend from '@/views/Friend.vue'

Vue.config.productionTip = false // 在开发模式下减少不必要的警告，提高开发效率
Vue.use(VueRouter) // VueRouter 插件初始化

// 创建路由对象
const router = new VueRouter({
  // route 一条路由规则 { path: 地址栏路径, component: 组件 }
  routes: [
    // 地址栏路径path和组件component 一一对应
    // 注意：这里的path是地址栏的绝对路径，不是相对路径，所以不要加点
    { path: '/find', component: Find },
    { path: '/my', component: My },
    { path: '/friend', component: Friend },
  ],
  // link自定义高亮类名
  linkActiveClass: 'active',  // 配置模糊匹配的类名
  linkExactActiveClass:'exact-active'  // 配置精确匹配的类名
})

// 要在其他文件(main.js)使用，需要导出，其他文件导入
export default router