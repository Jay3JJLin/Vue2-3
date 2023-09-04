import Vue from 'vue'
import App from './App.vue'
import store from '@/store/index'

Vue.config.productionTip = false

console.log(store.state.count)
new Vue({
  render: h => h(App),
  store
}).$mount('#app')

/*
vuex概述
目标：明确 vuex 是什么，应用场景，优势
1. 是什么：
vuex 是一个 vue 的 状态管理工具，状态就是数据。
大白话：vuex 是一个插件，可以帮我们管理 vue 通用的数据 (多组件共享的数据)
2. 场景：
① 某个状态 在 很多个组件 来使用 (个人信息)
② 多个组件 共同维护 一份数据 (购物车)
3. 优势：
① 共同维护一份数据，数据集中化管理
② 响应式变化
③ 操作简洁 (vuex提供了一些辅助函数)

-
通过$store访问的语法
获取 store(先找仓库):
 1.Vue模板中获取 this.$store
 2.js文件中获取 import 导入 store

模板中：     {{ $store.state.xxx }}
组件(vue)逻辑中：  this.$store.state.xxx
JS模块中：   store.state.xxx

*/
