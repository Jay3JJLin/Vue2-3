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
目标：掌握模块中 action 的调用语法 (同理 - 直接类比 mutation 即可)
注意：默认模块中的 mutation 和 actions 会被挂载到全局，需要开启命名空间，才会挂载到子模块。
调用子模块中 action ：
① 直接通过 store 调用 $store.dispatch('模块名/xxx ', 额外参数)
② 通过 mapActions 映射
默认根级别的映射 mapActions([ 'xxx' ])
子模块的映射 mapActions('模块名', ['xxx']) - 需要开启命名空间

小结：
1. 原生访问语法： 需要开启命名空间
state:      $store.state.模块名.xxx
getters:    $store.getters['模块名/xxx']
mutations:  $store.commit('模块名/xxx ', 额外参数)
actions:    $store.dispatch('模块名/xxx ', 额外参数)

2. 辅助函数访问语法：需要开启命名空间
(1) 默认根级别的映射
  mapState([ 'xxx' ])
  mapGetters([ 'xxx' ])
  mapMutations([ 'xxx' ])
  mapActions([ 'xxx' ])
(2)子模块的映射
  mapState('模块名', ['xxx'])
  mapGetters('模块名', ['xxx'])
  mapMutations('模块名', ['xxx'])
  mapActions('模块名', ['xxx'])
*/
