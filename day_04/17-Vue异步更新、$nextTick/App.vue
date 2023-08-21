<template>
  <div class="app">
    <div v-if="isShowEdit">
      <!-- 在Vue中获取DOM元素，使用ref和$refs -->
      <input type="text" v-model="editValue" ref="inp" />
      <button>确认</button>
    </div>
    <div v-else>
      <span>{{ title }}</span>
      <button @click="handleEdit">编辑</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '大标题',
      isShowEdit: false,
      editValue: '',
    }
  },
  methods: {
    handleEdit() {
      // 1.显示文本框 (异步DOM更新)
      this.isShowEdit = true
      // 2.让输入框获取焦点 （会等dom更新完之后 立马执行nextTick中的回调函数）
      this.$nextTick(() => {
        console.log(this.$refs.inp) // 此时DOM已经更新完了，不在函数内则为undefined
        this.$refs.inp.focus()
      })

      // setTimeout(() => {
      //   this.$refs.inp.focus()
      // }, 0)
    },
  },
}
</script>

<style></style>
