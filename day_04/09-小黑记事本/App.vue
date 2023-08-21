<template>
  <!-- 主体区域 -->
  <section id="app">
    <!-- 谁触发的给谁做监听 @事件名,与$emit的键名相同 -->
    <!-- 父传子:list="list"，子传父 @键名="函数名" -->
    <TodoHeader @add="handleAdd"></TodoHeader>
    <TodoMain :list="list" @del="handleDel"></TodoMain>
    <TodoFooter :list="list" @clear="handleClear"></TodoFooter>
  </section>
</template>

<script>
// 导入小组件
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'

// 渲染功能
// 1. 提供数据 -> 提供在公共的父组件 App.vue
// 2. 通过父传子，将数据传给 子组件，如 TodoMain
// 3. 利用 v-for 渲染

// 添加功能：
// 1.收集表单数据  v-model
// 2.监听事件（回车+点击都要添加）
// 3.子传父，讲任务名称传递给父组件 App.vue
// 4.进行添加 unshift（自己的数据自己负责）
// 5.清空文本框输入的内容
// 6.对输入的空数据 进行判断

// 删除功能
// 1.监听事件（监听删除的点击） 携带id
// 2.子传父，将删除的id传递给父组件的App.vue
// 3.进行删除filter（自己的数据 自己负责）

// 底部合计：父传子  传list  -> 渲染
// 清空功能：子传父  通知父组件 → 父组件进行更新
// 持久化存储：watch深度监视list的变化 -> 往本地存储 ->进入页面优先读取本地数据

export default {
  data() {
    return {
      // 优先从本地取数据，如果没有，则采用默认数据 (先转换成对象)
      list: JSON.parse(localStorage.getItem('list')) || [
        { id: 1, name: '伞兵一号' },
        { id: 2, name: '你就是歌姬' },
        { id: 3, name: '唱，跳，rap，篮球' },
      ],
    }
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  methods: {
    handleAdd(todoName) {
      this.list.unshift({
        id: +new Date(),
        name: todoName,
      })
    },
    handleDel(id) {
      // 过滤，返回符合条件的新数组
      this.list = this.list.filter((item) => item.id !== id)
    },
    handleClear() {
      // 清空数组，注意数据类型还是数组
      this.list = []
    },
  },
  watch: {
    list: {
      deep: true, // 深度监视
      handler(newValue) {
        // 本地存储，要转换成JSON字符串
        localStorage.setItem('list', JSON.stringify(newValue))

      },
    },
  },
}
</script>

<style></style>
