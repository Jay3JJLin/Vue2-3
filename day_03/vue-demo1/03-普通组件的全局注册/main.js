// 文件核心作用：导入App.vue，基于App.vue创建结构渲染index.html
// 1. 导入 Vue 核心包
import Vue from 'vue'

// 2. 导入 App.vue 根组件
import App from './App.vue'

// 编写导入的代码，往代码的顶部编写(规范)
// 导入需要全局注册的组件
import HmButton from './components/HmButton.vue'

// 调用 Vue.component 进行全局注册 -> 所有的组件范围内都能直接使用
// Vue.component('组件名', 组件对象)
Vue.component('HmButton', HmButton)


// 提示：当前处于什么环境 (生产环境 / 开发环境)
Vue.config.productionTip = false

// 3. Vue实例化，提供render方法 → 基于App.vue创建结构渲染index.html
new Vue({
  // el: '#app', 作用：和$mount('选择器')作用一致，用于指定Vue所管理容器
  // render: h => h(App),
  render: (createElement) => {
    // 基于App创建元素结构
    return createElement(App)
  }
}).$mount('#app')



// 普通组件的注册使用：
// 1. 两种注册方式：
// ① 局部注册：
// (1) 创建.vue组件 (单文件组件)
// (2) 使用的组件内导入，并局部注册 components: { 组件名：组件对象 }
// ② 全局注册：
// (1) 创建.vue组件 (单文件组件)
// (2) main.js内导入，并全局注册 Vue.component(组件名, 组件对象)
// 2. 使用：
// <组件名></组件名>
// 技巧：
// 一般都用局部注册，如果发现确实是通用组件，再抽离到全局。