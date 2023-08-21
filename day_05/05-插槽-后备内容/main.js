import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

/*
插槽 - 后备内容（默认值）
插槽后备内容：封装组件时，可以为预留的 `<slot>` 插槽提供后备内容（默认内容）

语法: 在 <slot> 标签内，放置内容, 作为默认显示内容
效果:
外部使用组件时，不传东西，则slot会显示后备内容
外部使用组件时，传东西了，则slot整体会被换掉

总结：
如何给插槽设置默认显示内容?
在slot标签内，写好后备内容
什么时候插槽后备内容会显示?
当使用组件并未给我们传入具体标签或内容时
*/