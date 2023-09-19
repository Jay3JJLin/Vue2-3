// 将创建实例进行了封装，保证每个实例的独立封装性
import { createApp } from 'vue'
import App from './App.vue'

// mount 设置挂载点 #app (id为app的盒子)
createApp(App).mount('#app')

/*
模板引用的概念
通过ref标识获取真实的dom对象或者组件实例对象

如何使用（以获取dom为例 组件同理）
1. 调用ref函数生成一个ref对象
2. 通过ref标识绑定ref对象到标签

defineExpose()
默认情况下在<script setup>语法糖下组件内部的属性和方法是不开放给父组件访问的，
可以通过defineExpose编译宏指定哪些属性和方法允许访问

1. 获取模板引用的时机是什么？
  组件挂载完毕
2. defineExpose编译宏的作用是什么？
  显式暴露组件内部的属性和方法
*/