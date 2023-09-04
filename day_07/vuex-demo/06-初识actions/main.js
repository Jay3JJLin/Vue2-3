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

1. 提供action 方法
  context.commit('mutation函数名', 额外参数)
2. 页面中 dispatch 调用
  this.$store.dispatch('action函数名', 额外参数)

说明：mutations 必须是同步的 (便于监测数据变化，记录调试)
*/
