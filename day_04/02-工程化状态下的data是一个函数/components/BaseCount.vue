<template>
  <div class="base-count">
    <button @click="count--">-</button>
    <span>{{ count }}</span>
    <button @click="count++">+</button>
  </div>
</template>

<script>
export default {
  // 组件提供数据data，写法必须是函数，函数里return一个对象
  // data必须是一个函数 -> 保证每个组件实例，维护独立的一个数据对象
  data() {
    console.log('函数执行了')
    return {
      count: 100,
    }
  },
  // data: function () {
  //   return {
  //     count: 100,
  //   };
  // },
};
</script>

<style>
.base-count {
  margin: 20px;
}
</style>