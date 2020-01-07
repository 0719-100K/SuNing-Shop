import {getCartGoods} from '@/utils'
import {
  SAVE_GOODS,
  REQ_BUYLIST,
  REQ_CoolMachine,
  REQ_TABBAR,
  REQ_ELECTRICS,
  REQ_CATEGORY,
  REQ_GUESSLIKE,
  REQ_SEARCHLIST,
  CLEARSEARCHLIST,
  // SORTSEARCH,
  REQ_RECEIVE_GOODS ,
  REQ_RECEIVE_CLASSLIST, 
  SAVE_USER,
  SAVE_TOKEN,
  RESET_TOKEN,
  RESET_USER,
  SAVE_GOODSDETAIL,
  REQ_DETAIL,
  ClEARDETAIL1,
  SAVECATENAME,
  ADD_GOODCOUNT,
  REDUCE_GOODCOUNT,
  SET_GOODACTIVE,
  SET_ALL,
  CLEAR_CHECK,
  GET_CARTGOODS
} from './mutation_type'
import Vue from 'vue'

export default {

  [ADD_GOODCOUNT](state,good){
    if (state.cartGoods.length > 0) {
      let result = state.cartGoods.find((item)=>{
        return item.id === good.id
      })
      if (result) {
        good = result
      }
    }
    if (good.count) {
      good.count++
    }else{
      Vue.set(good,'count',1)
      Vue.set(good,'active',false)
      state.cartGoods.push(good)
    }
  },
  [REDUCE_GOODCOUNT](state,good){
    if (good.count>0) {
      good.count--
      if (good.count === 0) {
        state.cartGoods.splice(state.cartGoods.indexOf(good),1)
      }
    }
  },
  [SET_GOODACTIVE](state,index){
    state.cartGoods[index].active = !state.cartGoods[index].active
  },
  [SET_ALL](state){
    state.cartGoods = state.cartGoods.map((item)=>{
      item.active = true
      return item
    })
  },
  [GET_CARTGOODS](state){
    state.cartGoods = getCartGoods()
  },
  [CLEAR_CHECK](state){
    console.log('bbbb');
    state.cartGoods = state.cartGoods.filter((item)=>{
      return item.active !== true
    })
  },
  [SAVE_GOODS](state,goodDetail){
    state.goodDetail = goodDetail
  },
  [REQ_BUYLIST](state,mustList){
    state.mustList = mustList
  },
  // 必买清单详情
  [REQ_DETAIL](state,obj1){
    state.mustDetail = obj1
  },
  // 酷机
  [REQ_CoolMachine](state,phonelist){
     state.phonelist = phonelist
  },
  // 导航
  [REQ_TABBAR](state,items){
    state.items = items
  },
  // 家电
  [REQ_ELECTRICS](state,eleList){
   state.eleList = eleList
  },
  // 分类
  [REQ_CATEGORY](state,category){
    state.category = category
  },
  [SAVECATENAME](state,name){
    state.categorySearchName = name
  },
  // 个人中心的猜你喜欢
  [REQ_GUESSLIKE](state,data){
    state.guessLike = data
  },
  // 搜索的列表
  [REQ_SEARCHLIST](state,data){
    state.searchList = data
  },
  // 在返回后清除搜索的列表
  [CLEARSEARCHLIST](state){
    state.searchList = [],
    state.categorySearchName = ''
  },

  // 搜索排序
  // [SORTSEARCH](state,newData){
  //   state.searchList =newData
  // },
  
  // 领券中心
  [REQ_RECEIVE_GOODS](state,data){
    state.data = data
  },
  [REQ_RECEIVE_CLASSLIST](state,data){
    state.classList = data
  },
  // 保存用户
  [SAVE_USER](state,{user}){
    state.user = user
  },
  // 保存token
  [SAVE_TOKEN](state,{token}){
    state.token = token
  },
  // 删除用户
  [RESET_USER](state){
    state.user = {}
  },
  // 删除token
  [RESET_TOKEN](state){
    state.token = ''
  },
  // 商品详情
  [SAVE_GOODSDETAIL](state,obj){
    state.goodDetail1 = obj
  },
  // 详情
  [REQ_DETAIL](state,obj1){
    state.mustDetail = obj1
  },
  [ClEARDETAIL1](state){
    state.goodDetail1 = {} 
  },

}