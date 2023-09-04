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
目标：掌握模块中 getters 的访问语法
使用模块中 getters 中的数据：
① 直接通过模块名访问 $store.getters['模块名/xxx ']
② 通过 mapGetters 映射
默认根级别的映射 mapGetters([ 'xxx' ])
子模块的映射 mapGetters('模块名', ['xxx']) - 需要开启命名空间
*/
