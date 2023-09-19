<script setup>
import { inject } from 'vue'

const themeColor = inject('theme-color') // 普通数据
const count = inject('count-key') // 响应式数据
const changeCount = inject('changeCount-key') // 传递方法

const clickCountFn = () => {
  changeCount(114514)
}

setTimeout(() => {
  count.value = 500
}, 2000)
</script> 

<template>
  <div>
    <h3>我是底层组件 -- {{ themeColor }} -- {{ count }}</h3>
    <button @click="clickCountFn">
      修改count为114514
    </button>
  </div>
</template>

<style scoped></style>