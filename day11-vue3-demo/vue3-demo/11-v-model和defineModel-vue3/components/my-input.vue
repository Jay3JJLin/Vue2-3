<script setup>
// vite.config.js 配置
// vue({
//   script: {
//     defineModel: true
//   }
// }),

// 如果使用，需要导入和配置vite.config.js 
import { defineModel } from 'vue'
const modelValue = defineModel()
</script>

<template>
  <div>
    <input type="text" :value="modelValue" @input="e => modelValue = e.target.value">
  </div>
</template>



