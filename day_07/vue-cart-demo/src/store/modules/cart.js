import axios from 'axios'

export default {
  // 开启命名空间
  namespaced: true,
  state () {
    return {
      // 购物车数据 [{}, {}]
      list: []
    }
  },
  mutations: {
    updateList (state, newList) {
      state.list = newList
    },
    updateCount (state, obj) {
      // obj: { id: xxx, newCount: xxx }
      // 根据id找到对应的对象，更新count属性即可
      const goods = state.list.find(item => item.id === obj.mId) // id对应的商品
      goods.count = obj.mNewCount
    }
  },
  actions: {
    // 发请求获取数据
    // 请求方式：get
    // 请求地址：http://localhost:3000/cart
    async getList (context) {
      const res = await axios.get('http://localhost:3000/cart')
      // console.log(res)
      context.commit('updateList', res.data)
    },

    // 请求方式：patch
    // 请求地址：http://localhost:3000/cart/:id值  表示修改的是哪个对象
    // 请求参数：
    // {
    //   name: '新值',  【可选】
    //   price: '新值', 【可选】
    //   count: '新值', 【可选】
    //   thumb: '新值'  【可选】
    // }

    // 前后台数据均更新
    async updateCountAsync (context, obj) {
      // console.log(obj)
      // 将修改更新同步到后台服务器
      await axios.patch(`http://localhost:3000/cart/${obj.id}`, {
        count: obj.newCount // 覆盖count(后台count名不能变)，更新
      })

      // 需要修改同步更新到vuex(前台)，提交到mutations
      context.commit('updateCount', {
        mId: obj.id,
        mNewCount: obj.newCount
      })
    }
  },
  getters: {
    // reduce ((结果和, 每项) => xxx, 起始值)
    // 商品总数 累加count
    total (state) {
      return state.list.reduce((sumCount, item) => sumCount + item.count, 0)
    },
    // 商品总价 累加count * price
    totalPrice (state) {
      return state.list.reduce((sumPrice, item) => sumPrice + item.count * item.price, 0)
    }
  }
}
