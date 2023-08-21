<template>
  <div>
    <!-- 父传子，拿到父级的数据 -->
    <!-- 下拉菜单必须拆分，不能直接用v-moudel -->
    <!-- 数据不是自己的，不能用v-moudel -->
    <select :value="cityID" @change="handleChange">
      <option value="101">北京</option>
      <option value="102">上海</option>
      <option value="103">武汉</option>
      <option value="104">广州</option>
      <option value="105">深圳</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    cityID: String,
  },
  methods: {
    // 通过事件对象拿到选择的最新数据
    handleChange(e) {
      // console.log(e.target.value); // value
      // 通过子传父，通知父级，更新数据
      // 将e.target.value整体作为形参$event传给父级
      this.$emit('changeId', e.target.value)
    },
  },
}
</script>

<style></style>
