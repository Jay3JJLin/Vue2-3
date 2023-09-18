// 购物车模块
import { getCartList, changeCount, delSelect } from '@/api/cart'
import { Toast } from 'vant'

export default {
  namespaced: true,
  state () {
    return {
      cartList: []
    }
  },
  // 只支持同步
  mutations: {
    // 提供一个设置 cartList 的 mutation
    setCartList (state, newList) {
      state.cartList = newList
    },
    toggleCheck (state, goodsId) {
      // 让对应的 id 的项 状态取反
      // 找到商品
      const goods = state.cartList.find(item => item.goods_id === goodsId)
      // check取反
      goods.isChecked = !goods.isChecked
    },
    // 全选切换
    toggleAllCheck (state, flag) {
      // 让所有的小选框，同步设置
      state.cartList.forEach(item => {
        item.isChecked = flag
      })
    },
    // 修改商品数量
    changeCount (state, obj) {
      const { goodsNum, goodsId } = obj
      const goods = state.cartList.find(item => item.goods.goods_id === goodsId)
      goods.goods_num = goodsNum
    }
  },
  // 异步处理
  actions: {
    async getCartAction (context) {
      // 调用接口，发送请求
      const { data } = await getCartList()

      // 后台返回的数据中，不包含复选框的选中状态，为了实现将来的功能(如，全选反选功能)
      // 需要手动维护数据，没给一项，添加一个 isChecked 状态(标记为当前商品是否选中)
      data.list.forEach(item => {
        item.isChecked = true // 默认选中
      })
      context.commit('setCartList', data.list)
    },
    async changeCountAction (context, obj) {
      // 为了简便，先解构
      const { goodsNum, goodsId, goodsSkuId } = obj

      // 调用接口，发请求
      // 1. 先本地修改
      context.commit('changeCount', { goodsNum, goodsId })
      // 2. 再同步到后台
      await changeCount(goodsId, goodsNum, goodsSkuId)
    },
    // 删除购物车数据
    async delAction (context) {
      // 找到选中的商品数组
      const selCartList = context.getters.selCartList
      // 根据大id删除整个商品信息
      // 注意：此处 id 为获取回来的购物车数据的 id
      const cartIds = selCartList.map(item => item.id)
      // 调用api, 发请求
      await delSelect(cartIds)
      Toast('删除成功')

      // 重新渲染拉取最新的购物车数据(重新渲染)
      context.dispatch('getCartAction')
    }
  },
  // 在页面中渲染用mapGetters
  getters: {
    // 求所有商品的累加总数
    cartTotal (state) {
      return state.cartList.reduce((sum, item) => sum + item.goods_num, 0)
    },
    // 选中的商品项
    selCartList (state) {
      return state.cartList.filter(item => item.isChecked === true)
    },
    // 选中的商品总数
    selCount (state, getters) {
      return getters.selCartList.reduce((sum, item) => sum + item.goods_num, 0)
    },
    // 选中的商品总价
    selPrice (state, getters) {
      return getters.selCartList.reduce((sum, item) => {
        return sum + item.goods_num * item.goods.goods_price_min
      }, 0).toFixed(2)
    },
    // 是否全选
    isAllChecked (state) {
      return state.cartList.every(item => item.isChecked)
    }
  }
}
