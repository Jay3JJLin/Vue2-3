<template>
  <div class="app">
    <input type="text" v-model="msg1" />
    <br />
    <!-- v-model的底层其实就是：value和 @input的简写 -->
    <!-- 
      ① 数据变，视图跟着变 :value 
      ② 视图变，数据跟着变 @input
      $event.target.value 相当于 e.target.value 
      @input 的形参就是 事件对象 $event
    -->
    <input type="text" :value="msg2" @input="msg2 = $event.target.value" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg1: '',
      msg2: '',
    }
  },
}
</script>

<style></style>
