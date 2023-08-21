<template>
  <div class="base-b">
    <div>我是B组件（发布方）</div>
    <button @click="sendMsgFn">发送消息</button>
  </div>
</template>

<script>
import Bus from '../utils/EventBus'
export default {
  methods: {
    sendMsgFn() {
      // 3. B组件(发送方)，触发事件的方式传递参数（发布消息），时间名要与接收方相同
      // 不止一对一，也可以一对多，只要监听了这个Bus的组件都可以
      Bus.$emit('sendMsg', '伞兵一号，准备就绪')
    },
  },
}
</script>

<style scoped>
.base-b {
  width: 200px;
  height: 200px;
  border: 3px solid #000;
  border-radius: 3px;
  margin: 10px;
}
</style>