<!-- 加上setup允许在script中直接编写组合式API -->
<!-- <script>
export default {
  setup () {
    // console.log('setup函数')

    // 数据
    const message = 'hello Vue3'
    // 函数
    const logMessage = () => {
      console.log(message)
    }
    // 必须return 才能使用
    return {
      message,
      logMessage
    }
  },
  beforeCreate () {
    console.log('beforeCreate函数')
  }
}
</script> -->

<!-- setup
1. 执行时机， 比beforeCreate还要早
2. setup函数中，获取不到this (this是undefined)
3. 数据和函数，需要在 setup 最后 return，才能在模板中使用

问题：每次都要return, 好麻烦  
-->
<script setup>
// 数据
const message = '你好 vue3'
// 函数
const logMessage = () => {
  console.log(message)
}
</script>

<template>
  <div>{{ message }}</div>
  <button @click="logMessage">按钮</button>
</template>

<style scoped></style>
