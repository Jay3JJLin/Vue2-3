<template>
  <div>
    <h1>自定义指令</h1>
    <!-- 全局指令，使用：v-指令名 -->
    <input v-focus ref="inp" type="text" />
  </div>
</template>

<script>
export default {
  // 内部指令，在页面(DOM)渲染完后立即获取焦点
  // mounted() {
  //   this.$refs.inp.focus()
  // },

  // 2. 局部注册指令 -> 只能在当前组件范围内使用
  directives: {
    // 指令名：指令的配置项
    focus: {
      inserted(el) {
        el.focus()
      }
    }
  }
}
</script>

<style></style>
