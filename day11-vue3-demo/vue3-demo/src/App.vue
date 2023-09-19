<script setup>
import MyInput from '@/components/my-input.vue'
import { ref } from 'vue'
const txt = ref('114514')
</script>

<template>
  <div>
    <MyInput v-model="txt"></MyInput>
    {{ txt }}
  </div>
</template>

<style scoped></style>