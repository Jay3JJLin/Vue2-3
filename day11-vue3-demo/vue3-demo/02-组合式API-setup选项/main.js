// 将创建实例进行了封装，保证每个实例的独立封装性
import { createApp } from 'vue'
import App from './App.vue'

// mount 设置挂载点 #app (id为app的盒子)
createApp(App).mount('#app')


/*
1. setup选项的执行时机？
beforeCreate钩子之前 自动执行
2. setup写代码的特点是什么？
定义数据 + 函数 然后以对象方式return
3. <script setup>解决了什么问题？
经过语法糖的封装更简单的使用组合式API
4. setup中的this还指向组件实例吗？
指向undefined
*/