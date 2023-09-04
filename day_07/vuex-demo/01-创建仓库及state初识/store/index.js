// 这里面存放的就是vuex 相关的核心代码
import Vue from 'vue'
import Vuex from 'vuex'

// 插件安装
Vue.use(Vuex)

// 创建空仓库
const store = new Vuex.Store({
  // 通过 state 可以提供数据(所有数据共享的数据)
  // state 状态, 即数据, 类似于vue组件中的data,
  // 区别：
  // 1.data 是组件自己的数据,
  // 2.state 中的数据整个vue项目的组件都能访问到
  state: {
    title: '大标题',
    count: 100
  }
})

// 导出给main.js使用
export default store
