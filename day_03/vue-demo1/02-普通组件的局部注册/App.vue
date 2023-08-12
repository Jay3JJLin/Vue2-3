<template>
  <!-- 
    组件注册的两种方式：
    1. 局部注册：只能在注册的组件内使用
    ① 创建 .vue 文件 (三个组成部分)
    ② 在使用的组件内导入并注册
    2. 全局注册：所有组件内都能使用
    ① 创建 .vue 文件 (三个组成部分)
    ② main.js 中进行全局注册
    使用：
    ◆ 当成 html 标签使用 `<组件名></组件名>`
    注意: 
    ◆ 组件名规范 → 大驼峰命名法，如：HmHeader
    技巧：
    ◆ 一般都用局部注册，如果发现确实是通用组件，再定义到全局。
   -->
  <div class="App">
    <!-- 使用组件 -->

    <!-- 头部部件 -->
    <HmHeader></HmHeader>
    <!-- 主体部件 -->
    <HmMain></HmMain>
    <!-- 底部部件 -->
    <HmFooter></HmFooter>
  
    <!-- 如果 HmFooter + tab 出不来 → 需要配置 vscode
         设置中搜索 trigger on tab → 勾上
    -->
  </div>
</template>

<script>
// 导入导入需要注册的组件
// import 组件对象 from '.vue文件路径'
import HmHeader from './components/HmHeader.vue'
import HmMain from './components/HmMain.vue'
import HmFooter from './components/HmFooter.vue'

export default {
  components:{
    // '组件名': 组件对象  名字相同可简写，只写一个
    HmHeader:HmHeader,
    HmMain,
    HmFooter
  }
}
</script>

<style>
.App {
  width: 600px;
  height: 800px;
  background-color: #87ceeb;
  margin: 0 auto;
  padding: 20px;
}
</style>

