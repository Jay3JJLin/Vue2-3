// 将创建实例进行了封装，保证每个实例的独立封装性
import { createApp } from 'vue'
import App from './App.vue'

// mount 设置挂载点 #app (id为app的盒子)
createApp(App).mount('#app')

/*
组合式API下的父传子
基本思想
1. 父组件中给子组件绑定属性
2. 子组件内部通过props选项接收

defineProps 原理：就是编译阶段的一个标识，实际编译器解析时，遇到后会进行编译转换

组合式API下的子传父
基本思想
1. 父组件中给子组件标签通过@绑定事件
2. 子组件内部通过 emit 方法触发事件

父传子
1. 父传子的过程中通过什么方式接收props？
defineProps( { 属性名：类型 } )
2. setup语法糖中如何使用父组件传过来的数据？
const props = defineProps( { 属性名：类型 } )
props.xxx

子传父
1. 子传父的过程中通过什么方式得到emit方法？
defineEmits( [‘事件名称’] )
2. 怎么触发事件
emit('自定义事件名', 参数)
*/