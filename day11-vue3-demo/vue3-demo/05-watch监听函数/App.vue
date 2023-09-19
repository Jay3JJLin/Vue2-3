<script setup>
import { ref, watch } from 'vue'
const count = ref(0)
const nickname = ref('伞兵')

const changeCount = () => {
  count.value++
}
const changeNickname = () => {
  nickname.value = '呱'
}

// 1. 监听单个数据的变化
// watch(ref对象, (newValue, oldValue) => {...})
watch(count, (newValue, oldValue) => {
  console.log(newValue, oldValue)
})

// 2. 监听多个数据的变化
// watch([ref对象1, ref对象2], (newArr, oldArr) => {...})
watch([count, nickname], (newArr, oldArr) => {
  console.log(newArr, oldArr)
})

// 3. immediate 立即执行,一进页面就执行一次
watch(count, (newValue, oldValue) => {
  console.log(newValue, oldValue)
}, {
  immediate: true
})

// 4. deep 深度监视
//  const ref1 = ref(简单类型) 可以直接监视
//  const ref2 = ref(复杂类型) 监视不到复杂类型内部数据的变化
const userInfo = ref({
  name: 'zs',
  age: 18
}, {
  deep: true
})
const setUserInfo = () => {
  // 不加deep,默认：修改 UserInfo.value 修改了对象的地址，才能监视判断
  // userInfo.value = { name: 'np', age: 50 }
  userInfo.value.age++
}

// 5. 对于对象中的单个属性，进行监视
watch(() => userInfo.value.age, (newValue, oldValue) => {
  console.log(newValue, oldValue)
})
</script>

<template>
  <div>{{ count }}</div>
  <button @click="changeCount">改数字</button>
  <div>{{ nickname }}</div>
  <button @click="changeNickname">改名字</button>

  <div>--------------------------------------------</div>
  <div>{{ userInfo }}</div>
  <button @click="setUserInfo">修改userInfo</button>
</template>

<style scoped></style>