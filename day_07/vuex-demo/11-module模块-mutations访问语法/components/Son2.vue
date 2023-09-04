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

    <!-- 访问根组件中的mutations -- 通过辅助函数mapMutations -->
    <br />
    <div>{{ filterList }}</div>

    <!-- 访问模块中的state - 通过辅助函数mapState -->
    <br />
    <div>{{ user.userInfo.name }}</div>
    <div>{{ setting.theme }}</div>
    <div>user模块的数据：{{ userInfo.name }}-{{ userInfo.age }}</div>
    <div>setting模块的数据：{{ theme }}-{{ desc }}</div>

    <!-- 访问模块中的getters - 通过辅助函数mapGetters -->
    <br />
    <div>{{ UpperCaseName }}</div>

    <!-- 访问模块中的mutations - 通过辅助函数mapMutations -->
    <br />
    <button @click="setUser({ name: 'gua', age: 360 })">更改个人信息</button>
    <button @click="setTheme('skyblue')">更新主题色</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Son2Com',
  computed: {
    // 全局级别的映射
    // 利用展开运算符，展开映射
    // mapState，mapGetters 都是在映射属性
    ...mapState(['count', 'title', 'user', 'setting']),
    ...mapGetters(['filterList']),

    // 分模块的映射
    ...mapState('user', ['userInfo']), // 子模块的state
    ...mapState('setting', ['theme', 'desc']),
    ...mapGetters('user', ['UpperCaseName']) // 子模块的getters
  },
  methods: {
    // 全局级别映射
    // mapMutations,mapActions 都是映射方法
    // 可以直接用subCount, changeTitle,changeAsyncCount
    ...mapMutations(['subCount', 'changeTitle']),
    ...mapActions(['changeAsyncCount']),
    handleSub (n) {
      // this.$store.commit('subCount', n)
      this.subCount(n)
    },

    // 分模块的映射
    ...mapMutations('user', ['setUser']), // 子模块的mutations
    ...mapMutations('setting', ['setTheme'])
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
