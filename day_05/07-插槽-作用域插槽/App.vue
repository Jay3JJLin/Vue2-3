<template>
  <div>
    <MyTable :data="list">
      <!-- 不能直接使用item.id，因为不能跨组件 -->
      <!-- 在template中, 通过 ` #插槽名= "obj" ` 接收，默认插槽名为 default -->
      <template #default="obj">
        <!-- {{ obj }} -->
        <button @click="del(obj.row.id)">删除</button>
      </template>
    </MyTable>

    <MyTable :data="list2">
      <!-- 接收时对象名称不固定，还可以解构 -->
      <template #default="{ row }">
        <button @click="show(row)">查看</button>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from './components/MyTable.vue'
export default {
  data() {
    return {
      list: [
        { id: 1, name: '王小美', age: 18 },
        { id: 2, name: '胡桃', age: 19 },
        { id: 3, name: '神里龟龟', age: 17 }
      ],
      list2: [
        { id: 1, name: '海伦娜', age: 18 },
        { id: 2, name: '企业', age: 19 },
        { id: 3, name: '独角兽', age: 17 }
      ]
    }
  },
  components: {
    MyTable
  },
  methods: {
    del(id) {
      this.list = this.list.filter(item => item.id !== id)
    },
    show(row) {
      // console.log(row);
      alert(`姓名：${row.name} 年龄：${row.age}`)
    }
  }
}
</script>
