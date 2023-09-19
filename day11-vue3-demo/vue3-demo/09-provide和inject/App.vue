<script setup>
import centerCom from '@/components/center-com.vue'
import { provide } from 'vue'
import { ref } from 'vue'

// provide传递  inject接收
// 1. 跨层传递普通数据，直接传
provide('theme-color', 'pink')

// 2. 跨层传递响应式数据,第二个参数设置为ref对象
const count = ref(100)
provide('count-key', count)

// 3. 跨层级传递函数 => 给子孙后代传递可以修改数据的方法(修改方还是在父级，子级只是提供数据)
provide('changeCount-key', (newCount) => {
  count.value = newCount
})
</script>

<template>
  <div>
    <h1>我是顶层组件</h1>
    <centerCom></centerCom>
  </div>
</template>

<style scoped></style>