import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 封装全局指令 focus
Vue.directive('focus', {
  // 指令所在DOM元素，被插入到页面中时触发
  inserted(el) {
    // el 是使用focus指令(v-focus)时所绑定的DOM元素
    el.focus()
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')


/*
商品列表的实现封装了几个组件？
2个组件，标签组件 和 表格组件
封装用到的核心技术点有哪些？
（1）props父传子 $emit子传父 v-model
（2）$nextTick 自定义指令
（3）插槽：具名插槽，作用域插槽


my-tag 标签组件的封装
1. 创建组件 - 初始化
2. 实现功能
   (1) 双击显示，并且自动聚焦
       v-if v-else @dbclick 操作 isEdit
       自动聚焦：
       1. $nextTick => $refs 获取到dom，进行focus获取焦点
       2. 封装v-focus全局指令
   (2) 失去焦点，隐藏输入框
       @blur 操作 isEdit 即可
   (3) 回显标签信息
       回显的标签信息是父组件传递过来的
       v-model实现功能 (简化代码)  v-model => :value 和 @input
       组件内部通过props接收, :value设置给输入框
   (4) 内容修改了，回车 => 修改标签信息
       @keyup.enter, 触发事件 $emit('input', e.target.value)

my-table 表格组件的封装
1. 数据不能写死，动态传递表格渲染的数据  props
2. 结构不能写死 - 多处结构自定义 【具名插槽】
   (1) 表头支持自定义
   (2) 主体支持自定义
*/