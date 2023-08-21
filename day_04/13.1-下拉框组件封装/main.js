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

2. 父组件 v-model 简化代码，实现 子组件 和 父组件数据 双向绑定
① 子组件中：props 通过 value 接收，事件触发 input
② 父组件中：v-model 给组件直接绑数据 ( :value + @input )



总结：
1. 表单类基础组件封装思路
① 父传子：父组件动态传递 prop 数据，拆解v-model，绑定数据
② 子传父：监听输入，子传父传值给父组件修改
本质：实现了实现 子组件 和 父组件数据 的双向绑定
2. v-model 简化代码的核心步骤
① 子组件中：props 通过 value 接收，事件触发 input 
② 父组件中： v-model 给组件直接绑数据
*/