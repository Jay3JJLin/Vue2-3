<template>
  <div class="search">
    <van-nav-bar title="商品搜索" left-arrow @click-left="$router.go(-1)" />

    <!-- 实时拿到输入框的值,用v-model做绑定,@search 回车事件 -->
    <van-search @search="goSearch(search)" v-model="search" show-action placeholder="请输入搜索关键词" clearable>
      <template #action>
        <div @click="goSearch(search)">搜索</div>
      </template>
    </van-search>

    <!-- 搜索历史 -->
    <div class="search-history" v-if="historyList.length > 0">
      <div class="title">
        <span>最近搜索</span>
        <van-icon @click="clearHistory" name="delete-o" size="16" />
      </div>
      <div class="list">
        <div v-for="item in historyList" :key="item" class="list-item" @click="goSearch(item)">{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getHistoryList, setHistoryList } from '@/utils/storage.js'
export default {
  name: 'SearchIndex',
  data () {
    return {
      search: '', // 输入框的内容
      historyList: getHistoryList() // 历史记录
    }
  },
  methods: {
    goSearch (key) {
      // console.log('进行了搜索，搜索历史要更新', key)
      const index = this.historyList.indexOf(key) // 查下标，便于删除
      if (index !== -1) {
        // 存在相同项,将原有关键字移除
        // splice(从哪开始，删除几个，项1，项2)
        this.historyList.splice(index, 1)
      }
      // 存在则先删，不存在就直接加前面
      this.historyList.unshift(key) // 首插法

      // 存入本地，便于下次获取
      setHistoryList(this.historyList)

      // 跳转到对应搜索的页面
      this.$router.push(`/searchlist?search=${key}`)
    },
    clearHistory () {
      this.historyList = []
      setHistoryList([])
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  .searchBtn {
    background-color: #fa2209;
    color: #fff;
  }
  ::v-deep .van-search__action {
    background-color: #c21401;
    color: #fff;
    padding: 0 20px;
    border-radius: 0 5px 5px 0;
    margin-right: 10px;
  }
  ::v-deep .van-icon-arrow-left {
    color: #333;
  }
  .title {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
  }
  .list {
    display: flex;
    justify-content: flex-start; // 从左到右对齐
    flex-wrap: wrap; // 当子盒子溢出容器时，自动换行
    padding: 0 10px;
    gap: 5%; // 盒子之间的间距为5%
  }
  .list-item {
    width: 30%;
    text-align: center;
    padding: 7px;
    line-height: 15px;
    border-radius: 50px;
    background: #fff;
    font-size: 13px;
    border: 1px solid #efefef;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 10px;
  }
}
</style>
