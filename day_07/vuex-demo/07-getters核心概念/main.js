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
核心概念 - getters
说明：除了state之外，有时我们还需要从state中派生出一些状态，这些状态是依赖state的，此时会用到getters
目标：掌握核心概念 getters 的基本语法 (类似于计算属性)
例如：state中定义了list，为 1-10 的数组，组件中，需要显示所有大于5的数据

1. 定义 getters
  {{ $store.getters.gettter函数名 }}
  注意：
  (1) getters函数的第一个参数是 state
  (2) getters函数必须要有返回值

2. 访问getters
① 通过 store 访问 getters
② 通过辅助函数 mapGetters 映射
computed: {
...mapGetters(['getter函数名'])
}
{{ getter函数名 }}
*/
