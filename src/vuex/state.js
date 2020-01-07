// import { REQ_GUESSLIKE } from "./mutation_type";


export default {

  goodDetail:[],//商品详情
  goodDetail1:{},//商品详情
  
  mustDetail:{},
  mustList:[],//必选
  phonelist:[],//酷机
  items:[],//导航
  eleList:[],//家电
  category:[],//分类
  guessLike:{}, //个人中心的猜你喜欢
  searchList:[], // 搜索的列表
// 领券中心
  classList:[],
  data:[],
  user:{},
  token:localStorage.getItem('token_key') || '',
  categorySearchName:'',
  cartGoods:[]
}