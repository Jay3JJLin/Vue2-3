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
核心概念-actions
目标：明确 actions 的基本语法，处理异步操作。
说明：mutations 必须是同步的 (便于监测数据变化，记录调试)
1. 提供action 方法
  context.commit('mutation函数名', 额外参数)
2. 页面中 dispatch 调用
  this.$store.dispatch('action函数名', 额外参数)

辅助函数 - mapMutations
目标：掌握辅助函数 mapMutations，映射方法
mapMutations 和 mapState很像，它是把位于mutations中的方法提取了出来，映射到组件methods中
*/
