import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


/*
ref 和 $refs 
作用：利用 ref 和 $refs 可以用于 获取 dom 元素, 或 组件实例
特点：查找范围 → 当前组件内 (更精确稳定)
① 获取 dom：
1. 目标标签 – 添加 ref 属性
2. 恰当时机, 通过 this.$refs.xxx, 获取目标标签
*/