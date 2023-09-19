// 将创建实例进行了封装，保证每个实例的独立封装性
import { createApp } from 'vue'
import App from './App.vue'

// mount 设置挂载点 #app (id为app的盒子)
createApp(App).mount('#app')

/*
作用和场景
顶层组件向任意的底层组件传递数据和方法，实现跨层组件通信

跨层传递普通数据
1. 顶层组件通过provide函数提供数据
  provide('key', 顶层组件中的数据)
2. 底层组件通过inject函数获取数据
  const message = inject('key')

跨层传递响应式数据
在调用provide函数时，第二个参数设置为ref对象
  provide('app-key', ref对象)
  const message = inject('app-key')
*/