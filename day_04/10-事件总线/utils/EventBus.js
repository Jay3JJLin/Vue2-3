// 先导入必要文件
import Vue from 'vue' 

// 1. 创建一个都能访问到的事件总线（空的Vue实例）
const Bus = new Vue()

// 导出
export default Bus