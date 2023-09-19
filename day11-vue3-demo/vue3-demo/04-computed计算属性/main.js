// 将创建实例进行了封装，保证每个实例的独立封装性
import { createApp } from 'vue'
import App from './App.vue'

// mount 设置挂载点 #app (id为app的盒子)
createApp(App).mount('#app')


/*
computed计算属性函数
计算属性基本思想和Vue2的完全一致，组合式API下的计算属性只是修改了写法
核心步骤：1. 导入computed函数
2. 执行函数 在回调参数中return基于响应式数据做计算的值，用变量接收

最佳实践
1. 计算属性中不应该有“副作用”
比如异步请求/修改dom
2. 避免直接修改计算属性的值
计算属性应该是只读的，特殊情况可以配置 get set
*/