import Vue from 'vue'
import App from './App.vue'
import './styles/index.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

/*
核心步骤： （父子通信是重点）
① 拆分基础组件
新建组件 → 拆分存放结构 → 导入注册使用
② 渲染待办任务
提供数据(公共父组件) → 父传子传递 list → v-for 渲染
③ 添加任务
收集数据 v-model → 监听事件 → 子传父传递任务 → 父组件 unshift
④ 删除任务
监听删除携带 id → 子传父传递 id → 父组件 filter 删除
⑤ 底部合计 和 清空功能
底部合计：父传子传递 list → 合计展示
清空功能：监听点击 → 子传父通知父组件 → 父组件清空
⑥ 持久化存储：watch监视数据变化，持久化到本地 
*/