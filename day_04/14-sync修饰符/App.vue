<template>
  <div class="app">
    <!-- 自己的属性可以自己修改 -->
    <button @click="openDialog">退出按钮</button>
    <!-- 自定义属性 visible  动态修改加:  sync实现双向绑定 -->
    <!-- :visible.sync  => :visible="isShow" @update:visible="isShow=$event" -->
    <BaseDialog :visible.sync="isShow"></BaseDialog>
  </div>
</template>

<script>
import BaseDialog from './components/BaseDialog.vue'
export default {
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    openDialog() {
      this.isShow = true
      // console.log(document.querySelectorAll('.box')); 
    },
  },
  components: {
    BaseDialog,
  },
}
</script>

<style>
</style>