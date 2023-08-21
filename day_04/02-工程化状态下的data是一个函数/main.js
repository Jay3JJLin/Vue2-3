import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// data 是一个函数
// 一个组件的 data 选项必须是一个函数。→ 保证每个组件实例，维护独立的一份数据对象。
// 每次创建新的组件实例，都会新执行一次 data 函数，得到一个新对象

// 组件三大组成部分的注意点：
// 1. 结构：有且只能一个根元素
// 2. 样式：默认全局样式，加上 scoped 局部样式
// 3. 逻辑：data是一个函数，保证数据独立。