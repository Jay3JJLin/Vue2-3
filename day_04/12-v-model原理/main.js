import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


/*
v-model 原理
原理：v-model本质上是一个语法糖。例如应用在 输入框 上，就是 value属性 和 input事件 的合写。
作用：提供数据的双向绑定
① 数据变，视图跟着变 :value 
② 视图变，数据跟着变 @input
注意：$event 用于在模板中，获取事件的形参 $event

注：如果应用于 复选框 上，则就是 checked属性 和 change事件 的合写
    但底层原理都是一样的
*/