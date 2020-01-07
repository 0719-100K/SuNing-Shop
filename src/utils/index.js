import Vue from 'vue'
export function saveCart(cartGoods){
  sessionStorage.setItem('cartObj',JSON.stringify(cartGoods)) || {}
}

export function getCartGoods(){
  const cartGoods = JSON.parse(sessionStorage.getItem('cartObj')) || {}
  return cartGoods
}