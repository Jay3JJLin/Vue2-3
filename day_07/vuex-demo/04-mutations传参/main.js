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
(state数据的修改只能通过 mutations )
1. 定义 mutations 对象，对象中存放修改 state 的方法
2. 组件中提交调用 mutations

提交 mutation 是可以传递参数的 `this.$store.commit( 'xxx', 参数 )`
1. 提供 mutation 函数 (带参数 - 提交载荷 payload )
2. 页面中提交调用 mutation

Tips: 提交参数只能一个，如果有多个参数，包装成一个对象传递
*/
