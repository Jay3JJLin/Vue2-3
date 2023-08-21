<template>
  <!-- 统计和清空 -->
  <footer class="footer">
    <!-- 统计 -->
    <span class="todo-count"
      >合 计:<strong> {{ list.length }} </strong></span
    >
    <!-- 清空 -->
    <button class="clear-completed" @click="clear">清空任务</button>
  </footer>
</template>

<script>
export default {
  // 接收
  props: {
    list: {
      type: Array,
    },
  },
  methods:{
    clear() {
      // 不传参数，是因为父级清空不需要参数
      this.$emit('clear')
    }
  }
}
</script>

<style></style>
