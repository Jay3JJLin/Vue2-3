import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


/*
项目小结：
1. 项目案例实现的基本步骤分哪两大步?
① 配路由 ② 实现页面功能
2. 嵌套路由的关键配置项是什么？
children
3. 路由传参两种方式？
① 查询参数传参，$route.query.参数名 (适合多个参数)
② 动态路由传参，$route.params.参数名 (更简洁直观)
4. 缓存组件可以用哪个内置组件？
keep-alive
三个属性： include exclude max
两个钩子： activated deactivated


组件缓存 keep-alive
问题：从面经 点到 详情页，又点返回，数据重新加载了 → 希望回到原来的位置
原因：路由跳转后，组件被销毁了，返回回来组件又被重建了，所以数据重新被加载了
解决：利用 keep-alive 将组件缓存下来

1. keep-alive是什么
keep-alive 是 Vue 的内置组件，当它包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。
keep-alive 是一个抽象组件：它自身不会渲染成一个 DOM 元素，也不会出现在父组件链中。
2. keep-alive的优点
在组件切换过程中 把切换出去的组件保留在内存中，防止重复渲染DOM，
减少加载时间及性能消耗，提高用户体验性
问题：缓存了所有被切换的组件
3. keep-alive的三个属性
① include ： 组件名数组，只有匹配的组件会被缓存
② exclude ： 组件名数组，任何匹配的组件都不会被缓存
③ max ： 最多可以缓存多少组件实例
4. keep-alive的使用会触发两个生命周期函数
activated 当组件被激活（使用）的时候触发 → 进入这个页面的时候触发
deactivated 当组件不被使用的时候触发 → 离开这个页面的时候触发
组件缓存后就不会执行组件的created, mounted, destroyed 等钩子了
所以其提供了actived 和 deactived钩子，帮我们实现业务需求。


keep-alive小结：
1. keep-alive是什么
Vue 的内置组件，包裹动态组件时，可以缓存
2. keep-alive的优点
组件切换过程中 把切换出去的组件保留在内存中(提升性能)
3. keep-alive的三个属性 (了解)
① include ： 组件名数组，只有匹配的组件会被缓存
② exclude ： 组件名数组，任何匹配的组件都不会被缓存
③ max ： 最多可以缓存多少组件实例
4. keep-alive的使用会触发两个生命周期函数 (了解)
activated 当组件被激活（使用）的时候触发 → 进入页面触发
deactivated 当组件不被使用的时候触发 → 离开页面触发
 */