// user 模块
const state = {
  userInfo: {
    name: 'sb',
    age: 114514
  },
  score: 75
}
const mutations = {
  setUser (state, newUserInfo) {
    state.userInfo = newUserInfo
  }
}
const actions = {
  setUserAction (context, newUserInfo) {
    // 将异步在action中进行封装
    setTimeout(() => {
      // 调用mutation  context--上下文，默认提交的就是自己模块的actios和mutation
      context.commit('setUser', newUserInfo)
    }, 1000)
  }
}
const getters = {
  // 分模块后， state 指代的是子模块的state
  UpperCaseName (state) {
    return state.userInfo.name.toUpperCase() // 转大写
  }
}

export default {
  // 开启命名空间
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
