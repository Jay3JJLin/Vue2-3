<script setup>
const count = 6
const sayHi = () => {
  console.log('单走一个6')
}
// vue3组件的属性和方法 默认不会向外暴露
// defineExpose 显式暴露组件内部的属性和方法
defineExpose({
  count,
  sayHi
})
</script>

<template>
  <div>
    我是用于测试的组件 -- {{ count }}
  </div>
  <button @click="sayHi">点击走6</button>
</template>

<style scoped></style>