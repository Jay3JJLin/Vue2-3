import request from '@/utils/request'

// 加入购物车
// goodsId  => 商品id    如iphone15
// goodsSkuId  => 商品规格id,如颜色
export const addCart = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/add', {
    goodsId,
    goodsNum, // 数量
    goodsSkuId
  })
}

// 获取购物车列表
export const getCartList = () => {
  return request.get('/cart/list')
}

// 更新购物车商品的数量
export const changeCount = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/update', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}

// 删除购物车商品
export const delSelect = (cartIds) => {
  return request.post('/cart/clear', {
    // 注意：此处 id 为获取回来的购物车数据的 id
    cartIds
  })
}
