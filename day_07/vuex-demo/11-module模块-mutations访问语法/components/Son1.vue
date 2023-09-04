<template>
  <div class="box">
    <h2>Son1 子组件</h2>
    从vuex中获取的值: <label>{{ $store.state.count }}</label>
    <br />
    <button @click="handleAdd(1)">值 + 1</button>
    <button @click="handleAdd(5)">值 + 5</button>
    <button @click="handleAdd(10)">值 + 10</button>
    <button @click="handleChange">1秒后改成114514</button>
    <button @click="changeFn('黑马程序员')">修改标题</button>

    <br />
    <div>{{ $store.state.list }}</div>
    <div>{{ $store.getters.filterList }}</div>

    <br />
    <!-- 模块中的state - 原生 ,先访问根，后访问子模块-->
    <div>{{ $store.state.user.userInfo.name }}</div>
    <div>{{ $store.state.setting.theme }}</div>

    <br />
    <!-- 测试访问模块中的getters -- 原生 -->
    <!-- 凡是带特殊字符的属性,如/,不能用. , 要用['属性名'] -->
    <div>{{ $store.getters['user/UpperCaseName'] }}</div>

    <br />
    <!-- 测试访问模块中的mutations -- 原生 -->
    <button @click="updateUser">更改个人信息</button>
    <button @click="updateTheme">更新主题色</button>
  </div>
</template>

<script>
export default {
  name: 'Son1Com',
  methods: {
    handleAdd (n) {
      // 通过 mutations进行修改数据,提交调用mutations
      // this.$store.commit('mutation函数名', 额外参数)
      // 注意点：mutation参数有且只能有一个，如果需要多个参数，可以包装成一个对象(或数组)
      // this.$store.commit('addCount', n)
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
    },
    updateUser () {
      // $store.commit('模块名/mutation函数名'，额外参数)
      this.$store.commit('user/setUser', {
        name: 'zz',
        age: 20
      })
    },
    updateTheme () {
      this.$store.commit('setting/setTheme', 'pink')
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
