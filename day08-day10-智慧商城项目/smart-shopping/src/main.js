import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入--按需导入组件文件
import '@/utils/vant-ui.js'

// 导入样式
import '@/styles/common.less'

// 全部导入(main.js)
// import Vant from 'vant'
// import 'vant/lib/index.css'
// 插件安装初始化，内部会将所有的vant所有组件进行导入注册
// Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
