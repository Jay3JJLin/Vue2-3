<template>
  <div class="main">
    <div class="box" v-loading="isLoading">
      <ul>
        <li v-for="item in list" :key="item.id" class="news">
          <div class="left">
            <div class="title">{{ item.title }}</div>
            <div class="info">
              <span>{{ item.source }}</span>
              <span>{{ item.time }}</span>
            </div>
          </div>

          <div class="right">
            <img :src="item.img" alt="" />
          </div>
        </li>
      </ul>
    </div>

    <div class="box2" v-loading="isloading2"></div>
  </div>
</template>

<script>
// 安装axios =>  yarn add axios
import axios from 'axios'

// 接口地址：http://hmajax.itheima.net/api/news
// 请求方式：get
export default {
  data() {
    return {
      list: [],
      isLoading: true,
      isloading2: true
    }
  },
  async created() {
    // 1. 发送请求获取数据
    const res = await axios.get('http://hmajax.itheima.net/api/news')

    setTimeout(() => {
      // 2. 更新到 list 中，用于页面渲染 v-for
      this.list = res.data.data
      // 加载完后，移除loading
      this.isLoading = false
    }, 2000) // 延时2秒，模拟网速慢的情况
  },
  // 封装局部指令loading，可以复用
  directives: {
    loading: {
      inserted(el, binding) {
        // 通过binging.value 拿到指令值，来判断是否加载
        binding.value ? el.classList.add('loading') : el.classList.remove('loading')
      },
      // 指令的值修改后触发，update提供逻辑
      update(el, binding) {
        binding.value ? el.classList.add('loading') : el.classList.remove('loading')
      }
    }
  }
}
</script>

<style>
/* 1. 准备一个 loading 类，通过伪元素定位，设置宽高，实现蒙层 */
.loading::before {
  /* content为空，在添加.loading 类时，不会显示任何内容 */
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff url('./assets/loading.gif') no-repeat center;
}
.main {
  position: relative;
}
.box2 {
  width: 400px;
  height: 400px;
  border: 2px solid #000;
  position: absolute;
}

.box {
  width: 800px;
  min-height: 500px;
  border: 3px solid orange;
  border-radius: 5px;
  position: relative;
}
.news {
  display: flex;
  height: 120px;
  width: 600px;
  margin: 0 auto;
  padding: 20px 0;
  cursor: pointer;
}
.news .left {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 10px;
}
.news .left .title {
  font-size: 20px;
}
.news .left .info {
  color: #999999;
}
.news .left .info span {
  margin-right: 20px;
}
.news .right {
  width: 160px;
  height: 120px;
}
.news .right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
