
import {
  REQ_BUYLIST,
  REQ_CoolMachine,
  REQ_TABBAR,
  REQ_ELECTRICS,
  REQ_CATEGORY,
  REQ_GUESSLIKE,
  REQ_SEARCHLIST,
  CLEARSEARCHLIST,
  SORTSEARCH,
  REQ_RECEIVE_GOODS ,
  REQ_RECEIVE_CLASSLIST, 
  SAVE_USER,
  SAVE_TOKEN,
  RESET_TOKEN,
  RESET_USER
} from './mutation_type'

export default {
  [REQ_BUYLIST](state,mustList){
    state.mustList = mustList 
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

  [REQ_GUESSLIKE](state,data){
    state.guessLike = data
  },
  [REQ_SEARCHLIST](state,data){
    state.searchList = data
  },
  [CLEARSEARCHLIST](state){
    state.searchList = []
  },

  // 搜索排序
  [SORTSEARCH](state,newData){
    state.searchList =newData
  },
  
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
}