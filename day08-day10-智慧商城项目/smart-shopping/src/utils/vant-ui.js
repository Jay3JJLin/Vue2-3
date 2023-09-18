// 按需导入
import Vue from 'vue'
import { Button, Switch, Rate, Tabbar, TabbarItem, NavBar, Toast, Search, Swipe, SwipeItem, Grid, GridItem, Icon, Lazyload, ActionSheet, Dialog, Checkbox, Tab, Tabs } from 'vant'

Vue.use(Tabs)
Vue.use(Tab)
Vue.use(Checkbox)
Vue.use(Dialog) // 弹出框
Vue.use(ActionSheet) // 动作面板(如：加入购物车的弹层)
Vue.use(Lazyload) // 懒加载(如：图片)
Vue.use(Icon)
Vue.use(Search) // 搜索框
Vue.use(Swipe) // 轮播图
Vue.use(SwipeItem)
Vue.use(Grid) // 布局
Vue.use(GridItem)

Vue.use(Toast)
Vue.use(NavBar)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Button)
Vue.use(Switch)
Vue.use(Rate)
