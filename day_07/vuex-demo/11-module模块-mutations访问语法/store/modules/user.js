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
const actions = {}
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
