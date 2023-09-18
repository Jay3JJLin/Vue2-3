// 导入持久化函数，在存到vuex的同时，存一份到本地(持久化)
import { getInfo, setInfo } from '@/utils/storage'

export default {
  namespaced: true, // 开启命名空间，与其他模块相互独立
  state () {
    return {
      // 个人权证相关
      // 因为刷新后数据会丢失，所以存本地从本地取
      userInfo: getInfo()
      // {
      //   totken: '',
      //   userId: ''
      // }
    }
  },
  mutations: {
    // 提供方法设置上面的值
    // 所有mutations的第一个参数，都是state
    setUserInfo (state, obj) {
      state.userInfo = obj
      setInfo(obj)
    }
  },
  actions: {
    async logout (context) {
      // 个人信息要重置
      context.commit('setUserInfo', {})

      // 购物车信息要重置(跨模块调用 mutation) cart/setCartList
      // context.commit('模块路径名', 参数, { root: true })
      context.commit('cart/setCartList', [], { root: true })
    }
  },
  getters: {}
}
