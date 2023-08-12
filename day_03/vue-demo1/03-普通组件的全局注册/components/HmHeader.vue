<template>
  <div class="hm-header">
    我是头部hm-header
    <HmButton></HmButton>
  </div>
</template>

<script>
// 如果要局部用按钮，就需要局部注册(如果没有全局注册)
// import HmButton from './HmButton.vue'
export default {
  // 局部注册：注册的组件只能在当前的组件范围内使用
  // components :{
  //   HmButton
  // }
}
</script>

<style>
.hm-header {
  height: 100px;
  /* 垂直居中 */
  line-height: 100px; 
  /* 水平居中 */
  text-align: center;
  font-size: 30px;
  color: white;
  background-color: #826aa4;
}
</style>