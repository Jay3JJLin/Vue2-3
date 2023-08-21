<template>
  <div class="app">
    <!-- 父级 监听事件changeCount，并用函数处理 -->
    <BaseCount :count="count" @changeCount="handleChange"></BaseCount>
  </div>
</template>

<script>
import BaseCount from './components/BaseCount.vue'
export default {
  components:{
    BaseCount
  },
  data(){
    return {
      count:666
    }
  },
  methods:{
    // 用函数接收和处理 子传过来新数据
    handleChange(newVal){ // newVal 是changeCount中传过来的
      // console.log(newVal);
      this.count = newVal
    }
  }
}
</script>

<style>

</style>