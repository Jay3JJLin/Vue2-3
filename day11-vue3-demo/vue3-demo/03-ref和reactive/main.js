// 将创建实例进行了封装，保证每个实例的独立封装性
import { createApp } from 'vue'
import App from './App.vue'

// mount 设置挂载点 #app (id为app的盒子)
createApp(App).mount('#app')


/*
1. reactive和ref函数的共同作用是什么 ？
  用函数调用的方式生成响应式数据
2. reactive vs ref ？
  1. reactive不能处理简单类型的数据
  2. ref参数类型支持更好但是必须通过.value访问修改
  3. ref函数的内部实现依赖于reactive函数
3. 在实际工作中推荐使用哪个？
  推荐使用ref函数，更加灵活统一
*/