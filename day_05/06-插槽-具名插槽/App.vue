<template>
  <div>
    <!-- 2. 在使用组件时，在组件标签内填入内容，可以是其他标签，也可以是文本 -->
    <MyDialog>
      <!-- 通过template标签包裹需要分发的结构，包成一个整体 -->
      <template v-slot:head>
        <h3>我是蒸蚌</h3>
        <span class="close">✖️</span>
      </template>

      <template #content>
        <div>你是蒸蚌</div>
      </template>
      
      <template #footer>
        <button>取消</button>
        <button>确认</button>
      </template>
    </MyDialog>
    <MyDialog>
      <template v-slot:head>
        <h3>我是呱</h3>
        <span class="close">✖️</span>
      </template>

      <template #content>
        <div>你是呱</div>
      </template>

      <template #footer>
        <button>取消</button>
        <button>确认</button>
      </template>
    </MyDialog>
    <MyDialog>
      <template v-slot:head>
        <h3>我是伞兵</h3>
        <span class="close">✖️</span>
      </template>

      <template #content>
        <div>你是伞兵</div>
      </template>

      <template #footer>
        <button>取消</button>
        <button>确认</button>
      </template>
    </MyDialog>
  </div>
</template>

<script>
import MyDialog from './components/MyDialog.vue'
export default {
  data() {
    return {}
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
