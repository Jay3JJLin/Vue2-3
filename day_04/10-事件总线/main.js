import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


/*
非父子通信 (拓展) - event bus 事件总线
作用：非父子组件之间，进行简易消息传递。(复杂场景 → Vuex)

1. 创建一个都能访问到的事件总线 (空 Vue 实例) → utils/EventBus.js
2. A 组件(接收方)，监听 Bus 实例的事件
3. B 组件(发送方)，触发 Bus 实例的事件
*/