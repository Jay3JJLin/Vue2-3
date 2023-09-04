<template>
  <div class="box">
    <h2>Son1 子组件</h2>
    从vuex中获取的值: <label>{{ count }}</label>
    <br />
    <button @click="handleAdd(1)">值 + 1</button>
    <button @click="handleAdd(5)">值 + 5</button>
    <button @click="handleAdd(10)">值 + 10</button>
    <button @click="handleChange">1秒后改成114514</button>
    <button @click="changeFn('黑马程序员')">修改标题</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Son1Com',
  methods: {
    handleAdd (n) {
      // 通过 mutations进行修改数据,提交调用mutations
      // this.$store.commit('addCount', n)
      // 注意点：mutation参数有且只能有一个，如果需要多个参数，可以包装成一个对象(或数组)
      this.$store.commit('addCount', {
        count: n,
        msg: '伞兵'
      })
    },
    changeFn (newTitle) {
      this.$store.commit('changeTitle', newTitle)
    },
    handleChange () {
      // this.$store.dispatch('action函数名', 额外参数)
      this.$store.dispatch('changeAsyncCount', 114514)
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
