<template>
  <form action="">
    账号：<input type="text" v-model="account" />
    <br />
    密码：<input type="password" autocomplete="off" v-model="password" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      account: '',
      password: '',
    }
  },
  methods: {
    // 方法一：收集表单数据，返回一个对象
    getValues() {
      return {
        account: this.account,
        password: this.password,
      }
    },
    // 方法二：重置表单
    resetValues() {
      this.account = ''
      this.password = ''
    },
  },
}
</script>

<style scoped></style>
