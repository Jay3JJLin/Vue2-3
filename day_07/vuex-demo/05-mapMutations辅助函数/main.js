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
mapMutations 和 mapState很像，它是把位于mutations中的方法提取了出来，映射到组件methods中
*/
