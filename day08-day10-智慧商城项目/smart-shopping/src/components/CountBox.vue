<template>
  <div class="count-box">
    <button @click="handleSub" class="minus">-</button>
    <!-- 回车或者失焦 表示确认提交 => 注册change事件 -->
    <input :value="value" @change="handleChange" class="inp" type="text" />
    <button @click="handleAdd" class="add">+</button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      typeof: Number,
      default: 1
    }
  },
  methods: {
    // 不管加还是减，都触发input事件
    handleSub () {
      if (this.value <= 1) {
        return
      }
      this.$emit('input', this.value - 1)
    },
    handleAdd () {
      this.$emit('input', this.value + 1)
    },
    // 输入值购买
    handleChange (e) {
      // 获取输入框的值,并转数字 (1) 数字 (2) NaN
      const num = +e.target.value

      // 输入了不合法的文本 或 输入负数，则回退成原来的 value 值
      if (isNaN(num) || num < 1) {
        e.target.value = this.value
        return
      }
      // 正常输入
      this.$emit('input', num)
    }
  }
}
</script>

<style lang="less" scoped>
.count-box {
  width: 110px;
  display: flex;
  .add,
  .minus {
    width: 30px;
    height: 30px;
    outline: none;
    border: none;
    background-color: #efefef;
  }
  .inp {
    width: 40px;
    height: 30px;
    outline: none;
    border: none;
    margin: 0 5px;
    background-color: #efefef;
    text-align: center; // 内容居中
  }
}
</style>
