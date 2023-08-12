// 文件核心作用：导入App.vue，基于App.vue创建结构渲染index.html
// 1. 导入 Vue 核心包
import Vue from 'vue'

// 2. 导入 App.vue 根组件
import App from './App.vue'

// 提示：当前处于什么环境 (生产环境 / 开发环境)
Vue.config.productionTip = false

// 3. Vue实例化，提供render方法 → 基于App.vue创建结构渲染index.html
new Vue({
  // el: '#app', 作用：和$mount('选择器')作用一致，用于指定Vue所管理容器
  // render: h => h(App),
  render: (createElement) => {
    // 基于App创建元素结构
    return createElement(App)
  }
}).$mount('#app')


// index.html index.html 模板文件 ③
// App.vue App根组件 → 项目运行看到的内容就在这里编写 ②
// main.js 入口文件 → 打包或运行，第一个执行的文件 ①

// 组件化开发 & 根组件
// ① 组件化：一个页面可以拆分成一个个组件，每个组件有着自己独立的结构、样式、行为。
// 好处：便于维护，利于复用 → 提升开发效率。
// 组件分类：普通组件、根组件。
// ② 根组件：整个应用最上层的组件，包裹所有普通小组件。


// App.vue 文件（单文件组件）的三个组成部分
// 1. 语法高亮插件：vetur
// 2. 三部分组成：
// ◆ template：结构 （有且只能一个根元素）
// ◆ script: js逻辑
// ◆ style： 样式 (可支持less，需要装包)
// 3. 让组件支持 less
// （1） style标签，lang="less" 开启less功能
// （2） 装包: yarn add less less-loader


// 总结
// (1) 组件化：
// 页面可拆分成一个个组件，每个组件有着独立的结构、样式、行为
// ① 好处：便于维护，利于复用 → 提升开发效率。
// ② 组件分类：普通组件、根组件。
// (2) 根组件：
// 整个应用最上层的组件，包裹所有普通小组件。
// 一个根组件App.vue，包含的三个部分：
// ① template 结构(只能有一个根节点)
// ② style 样式(可以支持less，需要装包 less 和 less - loader)
// ③ script 行为


// 使用步骤：
// 1. 全局安装 (一次) ：yarn global add @vue/cli 或 npm i @vue/cli -g
// 2. 查看 Vue 版本：vue --version
// 3. 创建项目架子：vue create project-name（项目名-不能用中文）
// 4. 启动项目： yarn serve 或 npm run serve（找package.json）