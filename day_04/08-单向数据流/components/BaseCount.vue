<template>
  <div class="base-count">
    <button @click="handleSub">-</button>
    <span>{{ count }}</span>
    <button @click="handleAdd">+</button>
  </div>
</template>

<script>
export default {
  // 1.自己的数据随便修改  （谁的数据 谁负责）
  // data () {
  //   return {
  //     count: 100,
  //   }
  // },

  // 2. prop传过来的数据（外部的数据），不能直接改

  // 单向数据流：父级 prop 的数据更新，会向下流动，影响子组件
  props: {
    count: {
      type: Number,
    },
  },
  methods: {
    // 要用函数处理外部变化
    handleSub() {
      // 子传父 this.$emit(事件名，参数)
      // 注意这里不是 this.count--
      this.$emit('changeCount', this.count - 1)
    },
    handleAdd() {
      this.$emit('changeCount', this.count + 1)
    },
  },
}
</script>

<style>
.base-count {
  margin: 20px;
}
</style>