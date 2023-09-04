import Vue from 'vue'
import App from './App.vue'

import router from './router/index'

new Vue({
  render: h => h(App),
  router: router  // 键和值相同，可以简写为router
}).$mount('#app')



/*
声明式导航 - 两个类名
说明：我们发现 router-link 自动给当前导航添加了 两个高亮类名
① router-link-active 模糊匹配 (用的多)
to="/my" 可以匹配 /my /my/a /my/b .... ② router-link-exact-active 精确匹配
to="/my" 仅可以匹配 /my


router-link 会自动给当前导航添加两个类名，有什么区别呢？
router-link-active 模糊匹配 (用的多)
router-link-exact-active 精确匹配
*/