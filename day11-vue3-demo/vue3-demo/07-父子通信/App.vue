<script setup>
// 父传子
// 1. 在父组件，通过添加属性的方式传值 给子组件
// 2. 在子组件，通过props接收

// 子传父
// 1. 在子组件内部，emit触发事件，(编译器宏获取)
// 2. 在父组件，通过 @ 监听

// 对于局部组件，导入进来就能使用
import { ref } from 'vue'
import sonComponent from '@/components/son-component.vue'

const money = ref(100)
const getMoney = () => {
  money.value += 10
}

const changeFn = (msg) => {
  money.value -= msg
}
</script>

<template>
  <div>
    <h3>
      父组件--{{ money }}
      <button @click="getMoney">挣钱</button>
    </h3>
    <!-- 给子组件，以添加属性的方式传值 :money 动态传值响应式-->
    <!-- 3. 绑定自定义事件 -->
    <sonComponent car="蒸蚌的车" :money="money" @changeMoney="changeFn"></sonComponent>
  </div>
</template>

<style scoped></style>