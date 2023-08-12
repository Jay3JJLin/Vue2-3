<template>
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


