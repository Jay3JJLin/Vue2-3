<template>
  <!-- 列表区域 -->
  <section class="main">
    <ul class="todo-list">
      <li class="todo" v-for="(item, index) in list" :key="item.id">
        <div class="view">
          <span class="index">{{ index + 1 }}.</span>
          <label>{{ item.name }}</label>
          <button class="destroy" @click="handleDel(item.id)"></button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  // 父级传过来的数据用props接收
  props: {
    list: {
      type: Array,
    },
  },
  methods: {
    handleDel(id) {
      console.log(id)
      // 子传父，再修改
      this.$emit('del', id)
    },
  },
}
</script>

<style></style>
