<template>
  <div class="search">
    <van-nav-bar fixed title="商品列表" left-arrow @click-left="$router.go(-1)" />

    <van-search readonly shape="round" background="#ffffff" :value="querySearch || '搜索商品'" show-action @click="$router.push('/search')">
      <template #action>
        <van-icon class="tool" name="apps-o" />
      </template>
    </van-search>

    <!-- 排序选项按钮 -->
    <div class="sort-btns">
      <div class="sort-item" @click="allSort">综合</div>
      <div class="sort-item" @click="salesSort">销量</div>
      <div class="sort-item" @click="priceSort">价格</div>
    </div>

    <div class="goods-list">
      <GoodsItem v-for="item in proList" :key="item.goods_id" :item="item"></GoodsItem>
    </div>
  </div>
</template>

<script>
import GoodsItem from '@/components/GoodsItem.vue'
import { getProList } from '@/api/product'
import { all } from 'axios'
export default {
  name: 'SearchIndex',
  data () {
    return {
      page: 1,
      proList: [],
      all: all,
      sales: 0,
      sort_price: 0
    }
  },
  components: {
    GoodsItem
  },
  computed: {
    // 获取地址栏的搜索关键字
    querySearch () {
      return this.$route.query.search
    }
  },
  async created () {
    const { data: { list } } = await getProList({
      categoryId: this.$route.query.categoryId,
      goodsName: this.querySearch,
      page: this.page
    })
    // console.log(list)
    this.proList = list.data
  },
  methods: {
    // 综合排序
    async allSort () {
      const { data: { list } } = await getProList({
        sortType: all,
        goodsName: this.querySearch,
        page: this.page
      })
      this.proList = list.data
    },
    // 价格排序--默认升序
    async priceSort () {
      const { data: { list } } = await getProList({
        sortPrice: this.sort_price,
        goodsName: this.querySearch,
        page: this.page
      })
      this.proList = list.data
    },
    // 销售量排序--降序
    async salesSort () {
      const { data: { list } } = await getProList({
        sales: this.sales,
        goodsName: this.querySearch,
        page: this.page
      })
      this.proList = list.data
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  padding-top: 46px;
  ::v-deep .van-icon-arrow-left {
    color: #333;
  }
  .tool {
    font-size: 24px;
    height: 40px;
    line-height: 40px;
  }

  .sort-btns {
    display: flex;
    height: 36px;
    line-height: 36px;
    .sort-item {
      text-align: center;
      flex: 1;
      font-size: 16px;
    }
  }
}

// 商品样式
.goods-list {
  background-color: #f6f6f6;
}
</style>
