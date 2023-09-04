<template>
  <div>
    <!-- 导航 -->
    <div class="footer_wrap">
      <!-- 名字要和前面的path对应 #/路径名 -->
      <router-link to="/find">发现音乐</router-link>
      <router-link to="/my">我的音乐</router-link>
      <router-link to="/friend">朋友</router-link>
    </div>

    <!-- 出口位置可以在导航上面，也可以在导航下面 -->
    <div class="top">
      <!-- 路由出口 -> 路径匹配的组件显示的位置 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
.footer_wrap {
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap a:hover {
  background-color: #555;
}

/* 
  模块高亮类名
  router-link-active  -> 模糊匹配 (更多)
  to="/find" => 地址栏 /find   /find/one   /find/two ..  以find开头的即可

  router-link-exact-active  -> 精确匹配
  to="/find" => 地址栏 /find
 */
.footer_wrap a.router-link-active {
  background-color: pink;
  color: black;
}
</style>
