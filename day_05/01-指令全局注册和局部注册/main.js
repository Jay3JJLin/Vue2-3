import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 1. 全局注册指令
Vue.directive('focus', {
  // inserted 会在 指令所在的元素，被插入到页面中时触发
  inserted(el) {
    // el 就是指令所绑定的元素
    // console.log(el);
    el.focus()
  }
})


new Vue({
  render: h => h(App),
}).$mount('#app')


/*
自定义指令的作用?
封装一些 dom 操作，扩展额外功能，例如获取焦点
自定义指令的使用步骤?
1. 注册 (全局注册 或 局部注册)
在 inserted 钩子函数中，配置指令dom逻辑
2. 标签上 v-指令名 使用
*/