<template>
  <div class="box">
    <h2>Son2 子组件</h2>
    从vuex中获取的值:<label>{{ count }}</label>
    <br />
    <button @click="handleSub(1)">值 - 1</button>
    <button @click="subCount(5)">值 - 5</button>
    <button @click="subCount(10)">值 - 10</button>
    <button @click="changeAsyncCount(888)">1秒后改成888</button>
    <button @click="changeTitle('伞兵一号准备就绪')">修改标题</button>

    <br />
    <div>{{ filterList }}</div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Son2Com',
  computed: {
    // 利用展开运算符，展开映射
    // mapState，mapGetters 都是在映射属性
    ...mapState(['count', 'title']),
    ...mapGetters(['filterList'])
  },
  methods: {
    // mapMutations,mapActions 都是映射方法
    // 可以直接用subCount, changeTitle,changeAsyncCount
    ...mapMutations(['subCount', 'changeTitle']),
    ...mapActions(['changeAsyncCount']),
    handleSub (n) {
      // this.$store.commit('subCount', n)
      this.subCount(n)
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
