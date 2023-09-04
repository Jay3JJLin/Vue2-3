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
通过辅助函数 (简化)
mapState是辅助函数，帮助我们把 store中的数据 自动 映射到 组件的计算属性中

1.第一步：导入mapState (mapState是vuex中的一个函数)
import { mapState } from 'vuex'

2.第二步：采用数组形式引入state属性
mapState(['count'])
> 上面代码的最终得到的是 类似于
count () {
    return this.$store.state.count
}

3.第三步：利用**展开运算符**将导出的状态映射给计算属性
computed: {
  ...mapState(['count'])
}

<div> state的数据：{{ count }}</div>

*/
