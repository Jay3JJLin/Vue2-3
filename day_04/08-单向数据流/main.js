import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


/*
prop & data、单向数据流
共同点：都可以给组件提供数据。
区别：
⚫ data 的数据是自己的 → 随便改
⚫ prop 的数据是外部的 → 不能直接改，要遵循 单向数据流
单向数据流：父级 prop 的数据更新，会向下流动，影响子组件。这个数据流动是单向的

口诀：谁的数据谁负责
*/



