<template>
  <div class="box">
    <h2>Son1 子组件</h2>
    从vuex中获取的值: <label>{{ count }}</label>
    <br />
    <button @click="handleAdd">值 + 1</button>
    <button @click="addFive">值 + 5</button>
    <button @click="changeFn">修改标题</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Son1Com',
  methods: {
    handleAdd () {
      // 遵循单向数据流
      // 错误代码(vue默认不会检测，检测需要成本)
      // this.$store.state.count++
      // console.log(this.$store.state.count)

      // 应该通过 mutations 核心概念，进行修改数据
      // 提交调用mutations
      this.$store.commit('addCount')
    },
    addFive () {
      this.$store.commit('addFive')
    },
    changeFn () {
      this.$store.commit('changeTitle')
    }
  },
  computed: {
    ...mapState(['count', 'title'])
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
