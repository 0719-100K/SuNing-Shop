
import {
  SAVE_GOODS,
  REQ_BUYLIST,
  REQ_CoolMachine,
  REQ_TABBAR,
  REQ_ELECTRICS,
  REQ_CATEGORY,
  REQ_GUESSLIKE,
  REQ_SEARCHLIST,
  REQ_RECEIVE_CLASSLIST,
  SAVE_USER,
  SAVE_TOKEN,
  RESET_TOKEN,
  RESET_USER,
  SAVE_GOODSDETAIL,
  REQ_DETAIL,
  ADD_GOODCOUNT,
  REDUCE_GOODCOUNT,
  SET_GOODACTIVE,
  SET_ALL
}
 from './mutation_type'
import {
  reqBuyList,
  reqCoolMachine,
  reqTabBar,
  reqElectrics,
  reqCategory,
  reqGuessLike,
  reqSearchList, 
  reqClassList,
  reqGoods,
  reqAutoLogin
} from '../api/index'

export default{
  setCartGood({commit},{isAdd,good}){
    if (isAdd) {
      commit(ADD_GOODCOUNT,good)
    }else{
      commit(REDUCE_GOODCOUNT,good)
    }
  },
  setActive({commit},index){
    commit(SET_GOODACTIVE,index)
  },
  setAll({commit}){
    commit(SET_ALL)
  },
  // 商品详情
  async getGoodDetail({commit}){
    let result = await reqGoods()
    if (result.status === 1) {
      const goodDetail = result.datas.data.sugGoods[0].skus
      commit(SAVE_GOODS,goodDetail)
    }
  },
  // 商品详情
  async getGoodDetail1({commit},id){
    let result = await reqGoods()
    if (result.status === 1) {
      let goodDetail2 = result.datas.data.sugGoods[0].skus
      let obj = goodDetail2.find( item=> item.id == id)
      commit(SAVE_GOODSDETAIL,obj)

      // console.log(goodDetail2)
      // console.log(obj)
    }
  },
  clearGoodDetail1({commit}){
    commit(SAVE_GOODSDETAIL,{})
  },
  // 详情
  async getSelectDetail({commit},id){
    let result = await reqBuyList()
    if (result.status === 1) {
      let goodDetail2 = result.datas.buyList.skus
      let obj1 = goodDetail2.find( item=> item.id == id)
      commit(REQ_DETAIL,obj1)

      console.log(goodDetail2)
      console.log(obj1)
    }
  },
 // 精选
 async getSelect({commit}){
  let result = await reqBuyList()
  if(result.status === 1){
    const mustList = result.datas
    commit(REQ_BUYLIST,mustList)
  }
 },
//  酷机
 async getCoolMachine({commit}){
  let result = await reqCoolMachine()
  if(result.status === 1){
    const phonelist = result.datas
    commit(REQ_CoolMachine,phonelist)
  }
 },
//  头部导航
 async getTabBar({commit}){
  let result = await reqTabBar()
  if(result.status === 1){
    const items = result.datas
    commit(REQ_TABBAR,items)
  }
  console.log('nav')
 },
//  家电
async getElectrics({commit}){
  let result = await reqElectrics()
  if(result.status === 1){
    const category = result.datas
    commit(REQ_ELECTRICS,category)
  }
 },
//  分类
async getCategory({commit}){
  let result = await reqCategory()
  if(result.status === 1){
    const data = result.datas
    commit(REQ_CATEGORY,data)
  }
 },

  //  个人中心的猜你喜欢
  async getGuessLike({commit}){
  let result = await reqGuessLike()
  if(result && result.status === 1){
    
    const data = result.datas.skus
    commit(REQ_GUESSLIKE,data)
  }
  },

  // 点击热词和输入框输入内容搜索
  async getSearchList({commit},keyword){
    let result = await reqSearchList(keyword)
    if(result.status === 1){
      const data = result.datas.skus
      commit(REQ_SEARCHLIST,data)
    }
  },

  //  保存用户/token
  saveUser({commit},user){
    const token = user.token
    localStorage.setItem('token_key',token)
    delete user.token
    commit(SAVE_USER,{user})
    commit(SAVE_TOKEN,{token})
  },
  // 自动登录
  async autoLogin({commit,state}){
    if (state.token && !state.user._id) {
      const result = await reqAutoLogin()
      if (result.code === 1) {
        const user = result.users
        commit(SAVE_USER,{user})
      }
    }
  },

  // 退出登录
  logout({commit}){
    localStorage.removeItem('token_key')
    commit(RESET_TOKEN)
    commit(RESET_USER)
  },
  
// 领券中心
  async getClassList({commit}){
    let result = await  reqClassList()
    if (result.status == 1) {
      const data = result.datas.blankList
      commit(REQ_RECEIVE_CLASSLIST,data)
    }
  },


}