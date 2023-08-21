<template>
  <div>
    <!-- 2. 在使用组件时，在组件标签内填入内容，可以是其他标签，也可以是文本 -->
    <MyDialog>
      <p>伞兵一号</p>
    </MyDialog>
    <MyDialog>
      <div>你是蒸蚌</div>
      <div>你是呱</div>
      你是蒸蚌
    </MyDialog>
  </div>
</template>

<script>
import MyDialog from './components/MyDialog.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    MyDialog
  }
}
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>