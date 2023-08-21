<template>
  <div>
    <h1 v-color="color1">指令的值1测试</h1>
    <h1 v-color="color2">指令的值2测试</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color1: 'red',
      color2: 'green'
    }
  },
  // 局部注册
  directives: {
    color: {
      // 1. inserted 提供的是元素被添加到页面中时的逻辑，即被添加到页面时触发
      inserted(el, binding) { // el是指令所绑定的元素(DOM元素)
        // console.log(el) // <h1 style="color: red;">指令的值1测试</h1>
        // 修改颜色
        // binding.value 就是我们指令的值
        el.style.color = binding.value
      },
      // 2. update 指令的值修改的时候触发，提供值变化后，dom更新的逻辑
      update(el, binding) {
        console.log('指令的值修改了')
        el.style.color = binding.value
      }
    }
  }
}
</script>

<style></style>
