<script setup>
// 子组件

// 父传子接收数据
// 注意：由于写了 setup , 所以无法直接配置 props 选项
// 所以，此处需要借助于 ”编译器宏“ 函数接收子组件传递的数据
const props = defineProps({
  car: {
    type: String
  },
  money: Number
})
console.log(props.car, props.money)

// 子传父传递数据
// 1. 通过 defineEmits 编译器宏生成emit方法
const emit = defineEmits(['changeMoney'])

const buy = () => {
  // 2.需要 emit 触发自定义事件，并传递参数
  emit('changeMoney', 5)
}
</script>

<template>
  <!-- 对于props传递过来的数据，模板中可以直接使用 -->
  <div class="son">
    我是子组件 --{{ car }}--{{ money }}
    <button @click="buy">败家</button>
  </div>
</template>

<style scoped>
.son {
  border: 1px solid #000;
  padding: 30px;
}
</style>