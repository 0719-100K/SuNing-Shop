import ajax from './ajax'

// 必买清单（精选页）
export const reqBuyList = () => ajax('/buyList/mustBuy')

// 必买清单（导航页）
export const reqTabBar = () => ajax('/buyList/headerNav')

// 必买清单（家电页）
export const reqElectrics = ()=>ajax('/buyList/electrics')

// 必买清单（酷机页）
export const reqCoolMachine = ()=>ajax('/buyList/coolMachine')

// 分类页面
export const reqCategory= ()=>ajax('/category')


// 请求个人中心页的猜你喜欢列表
export const reqGuessLike = () => ajax('/profile/guessLike',{
  headers: {
    needCheck: true
  }
})

// 请求短信验证码
export const reqSendCode = (phone) => ajax('/reqCode',{params:{phone}})
// 请求短信登录
export const reqSmsLogin = (phone,code) => ajax.post('/loginSms',{phone,code})
// 请求用户名密码登录
export const reqTextLogin = (username,pwd) => ajax.post('/loginText',{username,pwd})
// 自动登陆
export const reqAutoLogin = () => ajax('/auto_login')

//获取赚钱的轮播图
export const reqRecommendBanner = () => ajax('/money/getRecommendBanner')

//获取赚钱的导航
export const reqRecommendGate = () => ajax('/money/getGate')

//获取赚钱的金融优选
export const reqRecommendBank = () => ajax('/money/getRecommendBank')

// 首页请求
export const reqHomeCategory = () => ajax('/msite/category')
export const reqDesc = () => ajax('/msite/desc')
export const reqGoodInfo = (id) => ajax('/msite/good/info',{params:{id}})
export const reqGoods = () => ajax('/msite/homegoods')


// 搜索请求
export const reqSearchList = (keyword) => ajax.post('/search',{keyword})

//获取领券中心nav
export const reqShopList = () => ajax(`/center/centerHeader`)
export const reqClassList = () => ajax(`/center/centerGoods`)



