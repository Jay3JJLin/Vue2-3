import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// // 1. 全局注册指令
// Vue.directive('focus', {
//   // inserted 会在 指令所在的元素，被插入到页面中时触发
//   inserted (el) {
//     // el 就是指令所绑定的元素
//     // console.log(el);
//     el.focus()
//   }
// })


new Vue({
  render: h => h(App),
}).$mount('#app')


/*
自定义指令 - 指令的值
语法：在绑定指令时，可以通过“等号”的形式为指令 绑定 具体的参数值
通过 binding.value 可以拿到指令值，指令值修改会 触发 update 函数


1. 通过指令的值相关语法，可以应对更复杂指令封装场景
2. 指令值的语法：
① v-指令名 = "指令值"
，通过 等号 可以绑定指令的值
② 通过 binding.value 可以拿到指令的值
③ 通过 update 钩子，可以监听指令值的变化，进行dom更新操作
*/
