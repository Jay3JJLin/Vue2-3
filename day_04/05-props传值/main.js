import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


/*
什么是 prop
Prop 定义：组件上 注册的一些 自定义属性
Prop 作用：向子组件传递数据
特点：
⚫ 可以 传递 任意数量 的prop
⚫ 可以 传递 任意类型 的prop

*/



