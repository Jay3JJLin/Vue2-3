import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// // 1. 全局注册指令
// Vue.directive('focus', {
//   // inserted 会在 指令所在的元素，被插入到页面中时触发
//   inserted (el) {
//     // el 就是指令所绑定的元素
//     // console.log(el);
//     el.focus()
//   }
// })


new Vue({
  render: h => h(App),
}).$mount('#app')


/*
自定义指令 - v-loading 指令封装
分析：
1. 本质 loading 效果就是一个蒙层，盖在了盒子上
2. 数据请求中，开启loading状态，添加蒙层
3. 数据请求完毕，关闭loading状态，移除蒙层
实现：
1. 准备一个 loading 类，通过伪元素定位，设置宽高，实现蒙层
2. 开启关闭 loading 状态（添加移除蒙层），本质只需要添加移除类即可
3. 结合自定义指令的语法进行封装复用

总结：
1. 通过指令相关语法，封装了指令 v-loading 实现了请求的loading效果
2. 核心思路：
(1) 准备类名 loading，通过伪元素提供遮罩层
(2) 添加或移除类名，实现loading蒙层的添加移除
(3) 利用指令语法，封装 v-loading 通用指令
inserted 钩子中，binding.value 判断指令的值，设置默认状态
update 钩子中，binding.value 判断指令的值，更新类名状态
*/