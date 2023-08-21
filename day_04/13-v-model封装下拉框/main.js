import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


/*
表单类组件封装 & v-model 简化代码
1. 表单类组件 封装 ->  实现 子组件 和 父组件数据 的双向绑定
① 父传子：数据 应该是父组件 props 传递 过来的，拆解 v-model 绑定数据
② 子传父：监听输入，子传父传值给父组件修改
*/