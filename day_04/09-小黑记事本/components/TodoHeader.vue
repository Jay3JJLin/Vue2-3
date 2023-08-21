<template>
  <!-- 输入框 -->
  <header class="header">
    <h1>小黑记事本</h1>
    <!-- 回车和点击都能添加 -->
    <input
      @keyup.enter="handleAdd"
      v-model="todoName"
      placeholder="请输入任务"
      class="new-todo"
    />
    <button @click="handleAdd" class="add">添加任务</button>
  </header>
</template>

<script>
export default {
  // 收集数据data
  data() {
    return {
      todoName: '',
    }
  },
  methods: {
    handleAdd() {
      // console.log(this.todoName)
      // 填写数据不能为空
      if(this.todoName.trim() === '') {
        alert('填写名称不能为空')
        return
      }

      // 子传父
      this.$emit('add',this.todoName)
      // 添加完后清空
      this.todoName = ''
    },
  },
}
</script>

<style></style>
