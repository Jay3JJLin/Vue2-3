import Vue from 'vue'
import App from './App.vue'
import store from '@/store/index'

Vue.config.productionTip = false

console.log(store.state.count)
new Vue({
  render: h => h(App),
  store
}).$mount('#app')

/*
目标：掌握模块中 state 的访问语法
尽管已经分模块了，但其实子模块的状态，还是会挂到根级别的 state 中，属性名就是模块名
使用模块中的数据：
① 直接通过模块名访问 $store.state.模块名.xxx
② 通过 mapState 映射
默认根级别的映射 mapState([ 'xxx' ])
子模块的映射 mapState('模块名', ['xxx']) - 需要开启命名空间namespaced: true
*/
