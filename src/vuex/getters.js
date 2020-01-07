export default {
  totalCount(state){
    return state.cartGoods.reduce((pre, good) => pre + good.count, 0)
  },
  totalMoney(state){
    return state.cartGoods.reduce((pre, good) => pre + (good.active ? good.count*good.price : 0), 0)
  }
}