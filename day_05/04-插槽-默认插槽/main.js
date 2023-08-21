import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

/*
插槽 - 默认插槽
作用：让组件内部的一些 结构 支持 自定义
需求: 将需要多次显示的对话框, 封装成一个组件
问题：组件的内容部分，不希望写死，希望能使用的时候自定义。怎么办？

插槽基本语法：
1. 组件内需要定制的结构部分，改用<slot></slot>占位
2. 使用组件时, <MyDialog></MyDialog>标签内部, 传入结构替换slot

总结：
场景：当组件内某一部分结构不确定，想要自定义怎么办?
用插槽 slot 占位封装
使用：插槽使用的基本步骤?
1. 先在组件内用 slot 占位
2. 使用组件时, 传入具体标签内容插入
*/