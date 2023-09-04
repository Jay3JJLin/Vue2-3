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
明确 vuex 同样遵循单向数据流，组件中不能直接修改仓库的数据
通过 strict: true 可以开启严格模式

(state数据的修改只能通过 mutations )
1. 定义 mutations 对象，对象中存放修改 state 的方法
2. 组件中提交调用 mutations
*/
