# 多行文本显示省略号
      overflow: hidden;    
      display: -webkit-box;
      text-overflow:ellipsis;    
      -webkit-line-clamp:2;  // 限制在一个块元素显示的文本的行数
      -webkit-box-orient: vertical

# 报错Uncaught Error: [vue-router] route config "component" for path: /test cannot be a string id. Use an actual component

  原因：路由设置错误，原本想要设置重定向的路由，
      path：'',
      component:'imgs'   此处应该写redirect

# 从本地取出图片遍历时，需要再数据中的路径前面套上require，否则虽然路径是对的，但是取不到
      orderLists:[
          {id:1,text:'待支付',url:require('../../common/images/profile/order-icon01.png')},
          {id:2,text:'待发货',url:require('../../common/images/profile/order-icon02.png')},
          {id:3,text:'评价有礼',url:require('../../common/images/profile/order-icon03.png')},
          {id:4,text:'退还/售后',url:require('../../common/images/profile/order-icon04.png')},
          {id:5,text:'常购清单',url:require('../../common/images/profile/order-icon05.png')},
      ]

# 在底部导航切换时，页面会重新刷新，会导致index为1，就会造成点个人中心页，首页的图标会亮着
