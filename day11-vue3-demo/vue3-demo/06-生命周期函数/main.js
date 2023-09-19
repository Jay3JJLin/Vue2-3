// 将创建实例进行了封装，保证每个实例的独立封装性
import { createApp } from 'vue'
import App from './App.vue'

// mount 设置挂载点 #app (id为app的盒子)
createApp(App).mount('#app')

/*
生命周期函数基本使用
1. 导入生命周期函数
2. 执行生命周期函数 传入回调

执行多次
生命周期函数是可以执行多次的，多次执行时传入的回调会在时机成熟时依次执行

1. 组合式API中生命周期函数的格式是什么？
on + 生命周期名字
2. 组合式API中可以使用onCreated吗？
没有这个钩子函数，直接写到setup中
3. 组合式API中组件卸载完毕时执行哪个函数？
onUnmounted
*/