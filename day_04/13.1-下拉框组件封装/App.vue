<template>
  <div class="app">
    <!-- $event 即为形参 -->
    <!-- 父级能用v-moudel的前提是，子级配置完成 -->
    <!-- v-model -> :value + @input  -->

    <BaseSelect v-model="selectId"></BaseSelect>

    <!-- <BaseSelect :value="selectId" @input="selectId = $event"></BaseSelect> -->
  </div>
</template>

<script>
import BaseSelect from './components/BaseSelect.vue'
export default {
  // 数据由父级提供，也应由父级自己修改
  data() {
    return {
      selectId: '102',
    }
  },
  components: {
    BaseSelect,
  },
}
</script>

<style></style>
