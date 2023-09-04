<template>
  <div class="home">
    <div class="logo-box"></div>
    <div class="search-box">
      <input v-model="inpValue" type="text" />
      <button @click="goSearch">搜索一下</button>
    </div>
    <div class="hot-link">
      热门搜索：
      <!-- 2. 配置导航链接 to="/path/参数值" -->
      <router-link to="/search/黑马程序员">黑马程序员</router-link>
      <router-link to="/search/前端培训">前端培训</router-link>
      <router-link to="/search/如何成为前端大牛">如何成为前端大牛</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FindMusic',
  data() {
    return {
      inpValue: ''
    }
  },
  methods: {
    goSearch() {
      // 2.name 命名路由跳转 [简写]
      // this.$router.push({
      //   name: '路由名'
      // })
      // this.$router.push({
      //   name: 'search'
      // })

      // query查询传参
      // this.$router.push({
      //   name: '路由名字',
      //   query: {
      //     参数名1: '参数值1',
      //     参数名2: '参数值2'
      //   }
      // })
      // this.$router.push({
      //   name: 'search',
      //   query: {
      //     key: this.inpValue
      //   }
      // })

      // 动态路由传参 params
      // this.$router.push({
      //   name: '路由名字',
      //   params: {
      //     参数名: '参数值'
      //   }
      // })
      this.$router.push({
        name: 'search',
        params: {
          // 这里的参数名要和动态路由参数名相同
          words: this.inpValue
        }
      })
    }
  }
}
</script>

<style>
.logo-box {
  height: 150px;
  background: url('@/assets/logo.jpeg') no-repeat center;
}
.search-box {
  display: flex;
  justify-content: center;
}
.search-box input {
  width: 400px;
  height: 30px;
  line-height: 30px;
  border: 2px solid #c4c7ce;
  border-radius: 4px 0 0 4px;
  outline: none;
}
.search-box input:focus {
  border: 2px solid #ad2a26;
}
.search-box button {
  width: 100px;
  height: 36px;
  border: none;
  background-color: #ad2a26;
  color: #fff;
  position: relative;
  left: -2px;
  border-radius: 0 4px 4px 0;
}
.hot-link {
  width: 508px;
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
}
.hot-link a {
  margin: 0 5px;
}
</style>
