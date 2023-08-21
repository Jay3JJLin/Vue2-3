<template>
  <div class="my-tag">
    <input
      v-if="isEdit"
      ref="inp"
      v-focus
      class="input"
      type="text"
      placeholder="输入标签"
      @blur="isEdit = false"
      :value="value"
      @keyup.enter="handleEnter" />
    <!-- 双击 dblclick -->
    <div v-else @dblclick="handleClick" class="text">{{ value }}</div>
  </div>
</template>

<script>
export default {
  props: {
    // v-moudel 内置绑定 :value属性 和 和 @input
    value: String
  },
  data() {
    return {
      isEdit: false
    }
  },
  methods: {
    handleClick() {
      // 双击后，切换显示状态(Vue是异步DOM更新)
      this.isEdit = true
      // 不可以立即获取焦点(DOM还没更新完)，等DOM更新完，再获取焦点
      // this.$nextTick(() => {
      //   this.$refs.inp.focus()
      // })
    },
    handleEnter(e) {
      // 非空处理
      if (e.target.value.trim() === '') return alert('标签内容不能为空')

      // 子传父，按回车时，输入框的内容提交给父组件更新
      // 由于父组件是v-moudel，触发事件，需要触发input事件，一上传(按下后)立即更新
      this.$emit('input', e.target.value)
      // 提交完成，关闭输入状态
      this.isEdit = false
    }
  }
}
</script>

<style lang="less" scoped>
.my-tag {
  cursor: pointer;
  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;
    &::placeholder {
      color: #666;
    }
  }
}
</style>
