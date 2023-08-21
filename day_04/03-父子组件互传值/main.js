import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


/*
什么是组件通信
组件通信, 就是指 组件与组件 之间的数据传递。
组件的数据是独立的，无法直接访问其他组件的数据。
想用其他组件的数据 → 组件通信

父子通信流程
1. 父组件通过 props 将数据传递给子组件
2. 子组件利用 $emit 通知父组件修改更新

1. 两种组件关系分类 和 对应的组件通信方案
父子关系 → props & $emit
非父子关系 → provide & inject 或 eventbus
通用方案 → vuex

2. 父子通信方案的核心流程
2.1 父传子props：
① 父中给子添加属性传值 ② 子props 接收 ③ 子组件使用
2.2 子传父$emit：
① 子$emit 发送消息 ②父中给子添加消息监听 ③ 父中实现处理函数

*/



