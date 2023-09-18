// 跨组件通用方法,vue中js里面能写的，这里都能写
// 组件调用语法: mixins: [属性/方法名]
export default {
  // 此处编写的就是 Vue组件实例的 配置项，通过一定语法，可以直接混入到组件内部
  // data methods computed 生命周期函数 ...
  // 注意点：
  // 1. 如果此处 和 组件内，提供了同名的 data 或 methods， 则组件内 优先级更高
  // 2. 如果编写了生命周期函数，则mixins中的生命周期函数 和 页面的生命周期函数，
  //    会用数组管理，统一 执行

  // 根据登陆状态，判断是否需要显示登陆确认框
  // 1. 如果未登录 => 显示确认框，返回true
  // 2. 如果已登陆 => 啥也不干 返回false
  methods: {
    loginConfirm () {
      // 判断token是否存在
      if (!this.$store.getters.token) {
        // 弹确认框
        this.$dialog.confirm({
          title: '温馨提示',
          message: '此时需要先登录才能继续操作',
          confirmButtonText: '去登陆',
          cancelButtonText: '再逛逛'
        }).then(() => {
          // 确认，跳转到登录页
          // 如果希望，跳转到登录页 => 登陆后能跳转回来，需要在跳转的同时携带参数(当前的路径地址)
          // this.$route.fullPath(会包含查询参数)
          this.$router.replace({ // 将原来的页面替换掉，而不是新增页面后跳转
            path: '/login',
            // 携带查询参数
            query: {
              backUrl: this.$route.fullPath
            }
          })
        }).catch(() => {
          // 取消
        })
        return true
      }
      return false
    }
  }
}
