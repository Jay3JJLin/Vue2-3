<template>
  <div class="app">
    <!-- $event 即为形参 -->
    <!-- 子传过来的 $event 即为数据value -->
    <BaseSelect :cityID="selectId" @changeId="selectId = $event"></BaseSelect>
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
