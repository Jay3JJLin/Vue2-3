import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


/*
Vue异步更新、$nextTick
$nextTick：等 DOM 更新后, 才会触发执行此方法里的函数体
语法: this.$nextTick(函数体)


总结：
1. Vue是异步更新 DOM 的
2. 想要在 DOM 更新完成之后做某件事，可以使用 $nextTick
this.$nextTick(() => {
  业务逻辑
})
*/