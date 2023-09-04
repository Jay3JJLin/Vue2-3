// 这里面存放的就是vuex 相关的核心代码
import Vue from 'vue'
import Vuex from 'vuex'

// 插件安装
Vue.use(Vuex)

// 创建空仓库
const store = new Vuex.Store({
  // state 状态, 即数据, 类似于vue组件中的data,

  // 开启严格模式(strict: true ,有利于初学者，检测不规范的代码 => 上线时移除)
  // 任何在其他组件修改本仓库的代码的操作均会报错

  // 1. 通过state可以提供数据
  strict: true,
  state: {
    title: '仓库大标题',
    count: 100
  },
  // 2.通过mutations可以提供修改数据的方法
  mutations: {
    // 所有mutation函数，第一个参数是当前store的state属性
    addCount (state) {
      // 修改数据
      state.count += 1
    },
    addFive (state) {
      state.count += 5
    },
    changeTitle (state) {
      state.title = '伞兵标题'
    }
  }
})

// 导出给main.js使用
export default store
