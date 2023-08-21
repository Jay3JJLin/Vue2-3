<template>
  <div class="app">
    <BaseForm ref="baseForm"></BaseForm>

    <button @click="handleGet">获取数据</button>
    <button @click="handleReset">重置数据</button>
  </div>
</template>

<script>
import BaseForm from './components/BaseForm.vue'
export default {
  data() {
    return {}
  },
  components: {
    BaseForm,
  },
  methods: {
    handleGet() {
      console.log(this.$refs.baseForm.getValues())
    },
    handleReset() {
      this.$refs.baseForm.resetValues()
    },
  },
}
</script>

<style scoped></style>
