<script setup>
// 1. reactive: 接收一个对象类型的数据，会返回一个响应式的对象
// 问题：如果是简单类型，怎么办？
import { reactive } from 'vue'
const state1 = reactive({
  count1: 101
})
const setCount1 = () => {
  state1.count1++
}

// 2. ref()  作用：接收 简单类型 或者 对象类型 的数据传入并返回一个响应式的对象
// 本质：是在原有传入数据的基础上，外层包了一层对象，包成了复杂类型
// 底层：包成复杂类型之后，再借助 reactive 实现响应式
// 注意点：
// 1. 脚本中访问数据，需要通过.value
// 2. 在template中， .value不需要加(帮我们包了一层)

// 推荐：以后声明数据，统一用 ref  =>  统一编码规范
import { ref } from 'vue'
const count2 = ref(0) // 对象同理ref.value.属性
// console.log(count2.value)
const setCount2 = () => {
  count2.value--
}
</script>

<template>
  <div>
    <div>{{ state1.count1 }}</div>
    <button @click="setCount1">+1</button>

    <!-- 使用ref时，去掉value这一层 -->
    <div>{{ count2 }}</div>
    <button @click="setCount2">-1</button>
  </div>
</template>

<style scoped></style>