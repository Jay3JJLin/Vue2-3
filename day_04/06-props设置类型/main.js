import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


/*
props 校验
思考：组件的 prop 可以乱传么？
作用：为组件的 prop 指定验证要求，不符合要求，控制台就会有错误提示 → 帮助开发者，快速发现错误
语法：
① 类型校验 -> 最常用
② 非空校验
③ 默认值
④ 自定义校验

props: {
校验的属性名: 类型 // Number String Boolean ...
},

props: {
校验的属性名: {
type: 类型, // Number String Boolean ...
required: true, // 是否必填
default: 默认值, // 默认值
validator (value) { // 自定义校验逻辑
return 是否通过校验
}
}
},
*/



