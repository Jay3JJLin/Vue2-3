// 这里面存放的就是vuex 相关的核心代码
import Vue from 'vue'
import Vuex from 'vuex'

// 插件安装使用
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
    count: 100,
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  // 2.通过mutations可以提供修改数据的方法
  mutations: {
    // 所有mutation函数，第一个参数是当前store的state属性
    // addCount (state, n) {
    // 修改数据
    //   state.count += n
    // },
    addCount (state, obj) {
      state.count += obj.count
    },
    subCount (state, n) {
      state.count -= n
    },
    changeCount (state, newCount) {
      state.count = newCount
    },
    changeTitle (state, newTitle) {
      state.title = newTitle
    }
  },
  // 3. actions 处理异步，注意：不能直接操作 state, 还是需要 commit mutation
  actions: {
    // context 上下文(此处为分模块，可以当成 store 仓库)
    // context.commit('mutation函数名', 额外参数)
    changeAsyncCount (context, num) {
      // 一秒后，修改这个数
      // 这里是setTimeout模拟异步，以后大部分场景是发请求
      setTimeout(() => {
        context.commit('changeCount', num)
      }, 1000)
    }
  },
  // 4. getters 类似于计算属性，只有获取，没有修改
  getters: {
    // 注意点：
    // (1) getters函数的第一个参数(形参是 state
    // (2) getters函数必须要有返回值
    filterList (state) {
      return state.list.filter(item => item > 5)
    }
  }
})

// 导出给main.js使用
export default store
