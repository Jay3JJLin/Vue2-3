// vuex持久化到本地
// 约定一个通用的键名
const INFO_KEY = 'smart_shopping_info'
const HISTORY_KEY = 'search_history_list'

// 获取个人信息
export const getInfo = () => {
  const defaultObj = { token: '', userId: '' }
  const result = localStorage.getItem(INFO_KEY)
  // 因为需要返回对象，所以需要序反列化JSON.parse
  return result ? JSON.parse(result) : defaultObj
}

// 设置个人信息
export const setInfo = (obj) => {
  // 传过来的是对象，但存到本地需要的是JSON字符串，所以要序列化JSON.stringify
  localStorage.setItem(INFO_KEY, JSON.stringify(obj))
}

// 移除个人信息
export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}

// 获取本地搜索历史
export const getHistoryList = () => {
  const result = localStorage.getItem(HISTORY_KEY)
  return result ? JSON.parse(result) : []
}

// 设置搜索历史
export const setHistoryList = (arr) => {
  return localStorage.setItem(HISTORY_KEY, JSON.stringify(arr))
}
