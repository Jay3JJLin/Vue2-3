import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

/*
插槽 - 具名插槽
具名插槽简化语法:
1. 多个slot使用name属性区分名字
2. template配合v-slot:名字来分发对应标签
3. v-slot:插槽名 可以简化成 #插槽名


总结：
组件内 有多处不确定的结构 怎么办?
具名插槽
1. slot占位, 给name属性起名字来区分
2. template配合 v-slot:插槽名 分发内容
v-slot:插槽名 可以简化成什么?
#插槽名
*/