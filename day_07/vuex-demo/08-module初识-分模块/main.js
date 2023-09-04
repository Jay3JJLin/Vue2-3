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
核心概念 - 模块 module (进阶语法)
目标：掌握核心概念 module 模块的创建
由于 vuex 使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，
store 对象就有可能变得相当臃肿。(当项目变得越来越大的时候，Vuex会变得越来越难以维护)

模块拆分:
user模块: store/modules/user.js
*/
