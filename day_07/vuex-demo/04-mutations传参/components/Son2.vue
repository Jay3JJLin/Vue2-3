<template>
  <div class="box">
    <h2>Son2 子组件</h2>
    从vuex中获取的值:<label>{{ count }}</label>
    <br />
    <button @click="handleSub(1)">值 - 1</button>
    <button @click="handleSub(5)">值 - 5</button>
    <button @click="handleSub(10)">值 - 10</button>
    <button @click="changeFn('伞兵一号准备就绪')">修改标题</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Son2Com',
  computed: {
    // 利用展开运算符，展开映射
    ...mapState(['count', 'title'])
  },
  methods: {
    handleSub (n) {
      this.$store.commit('subCount', n)
    },
    changeFn (newTitle) {
      this.$store.commit('changeTitle', newTitle)
    }
  }
}
</script>

<style lang="css" scoped>
.box {
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
