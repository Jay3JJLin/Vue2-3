<script setup>
// const 计算属性 = computed() => {
//   return 计算返回的结果
// }

import { computed, ref } from 'vue'

// 声明数组
// list 是数组对象，list.value 才是真数组
const list = ref([1, 2, 3, 4, 5, 6, 7, 8])

// 基于list派生一个计算属性，从list过滤出 > 2
const computeList = computed(() => {
  return list.value.filter(item => item > 2)
})

// get和set写法
// const computeList = computed({
//   get: () => { return list.value.filter(item => item > 2) },
//   set: (val) => {
//     list.value = list.value.push(val)
//   }
// })
// console.log(computeList)

// 定义一个修改数组的方法
const addFn = () => {
  list.value.push(666)
}
</script>

<template>
  <div>
    <div>原始数据：{{ list }}</div>
    <div>计算后的数据：{{ computeList }}</div>
    <button type="button" @click="addFn">addFn修改</button>
  </div>
</template>

<style scoped></style>