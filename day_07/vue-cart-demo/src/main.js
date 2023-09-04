import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

/*
目标：基于 json-server 工具，准备后端接口服务环境
1. 安装全局工具 json-server （全局工具仅需要安装一次）【官网】
yarn global add json-server 或 npm i json-server -g
2. 代码根目录新建一个 db 目录
3. 将资料 index.json 移入 db 目录
4. 进入 db 目录，执行命令，启动后端接口服务
json-server index.json
5. 访问接口测试 http://localhost:3000/cart

推荐：json-server --watch index.json (可以实时监听 json 文件的修改)
测试不了的用 npm i json-server -g 重新安装再试
*/
