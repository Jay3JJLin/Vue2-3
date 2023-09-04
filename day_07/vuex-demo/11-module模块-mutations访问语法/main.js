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
目标：掌握模块中 mutation 的调用语法
注意：默认模块中的 mutation 和 actions 会被挂载到全局，需要开启命名空间，才会挂载到子模块。
调用子模块中 mutation：
① 直接通过 store 调用 $store.commit('模块名/xxx ', 额外参数)
② 通过 mapMutations 映射
默认根级别的映射 mapMutations([ 'xxx' ])
子模块的映射 mapMutations('模块名', ['xxx']) - 需要开启命名空间
*/
