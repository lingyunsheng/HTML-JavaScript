//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    goods: [
      { isshow:0,
        url: '../goods/goods',
        src: '../../images/two.png',
        content: '\xa0\xa0\xa027包18包8包\xa0\xa0植物原木抽纸300张整箱批发（可点击）',
        price: '10.9',
        pin: '已团114万件',
        title: '商品详情'
      },
      {
        isshow:1,
        url: '../goods/goods',
        src: '../../images/three.png',
        content: '\xa0\xa0\xa027包18包8包\xa0\xa0植物原木抽纸300张整箱批发（可点击）',
        price: '29.9',
        pin: '已团3万件',
        title: '商品详情'
      },
      {
        isshow:2,
        url: '../goods/goods',
        src: '../../images/four.png',
        content: '\xa0\xa0\xa027包18包8包\xa0\xa0植物原木抽纸300张整箱批发（可点击）',
        price: '29.9',
        pin: '已团3万件',
        title: '商品详情'
      },
      {
        isshow:3,
        url: '../goods/goods',
        src: '../../images/five.png',
        content: '\xa0\xa0\xa027包18包8包\xa0\xa0植物原木抽纸300张整箱批发（可点击）',
        price: '29.9',
        pin: '已团3万件'
      },
      {
        isshow:4,
        url: '../goods/goods',
        src: '../../images/six.png',
        content: '\xa0\xa0\xa027包18包8包\xa0\xa0植物原木抽纸300张整箱批发（可点击）',
        price: '29.9',
        pin: '已团3万件',
        title: '商品详情'
      },
      {
        isshow:5,
        url: '../goods/goods',
        src: '../../images/seven.png',
        content: '\xa0\xa0\xa0睡衣女夏短袖丝绸性感夏天女人薄款大码家居服两件套冰',
        price: '29.9',
        pin: '已团3万件',
        title: '商品详情'
      },
      {
        isshow:6,
        url: '../goods/goods',
        src: '../../images/eight.png',
        content: '\xa0\xa0\xa027包18包8包\xa0\xa0植物原木抽纸300张整箱批发（可点击）',
        price: '29.9',
        pin: '已团3万件',
        title: '商品详情'
      },
      {
        isshow:7,
        url: '../goods/goods',
        src: '../../images/nine.png',
        content: '\xa0\xa0\xa027包18包8包\xa0\xa0植物原木抽纸300张整箱批发（可点击）',
        price: '29.9',
        pin: '已团3万件',
        title: '商品详情'
      },
      {
        isshow:8,
        url: '../goods/goods',
        src: '../../images/ten.png',
        content: '\xa0\xa0\xa027包18包8包\xa0\xa0植物原木抽纸300张整箱批发（可点击）',
        price: '29.9',
        pin: '已团3万件',
        title: '商品详情'
      },
      {
        isshow:9,
        url: '../goods/goods',
        src: '../../images/ten.png',
        content: '\xa0\xa0\xa027包18包8包\xa0\xa0植物原木抽纸300张整箱批发（可点击）',
        price: '29.9',
        pin: '已团3万件',
        title: '商品详情'
      },
      {
        isshow:10,
        url: '../goods/goods',
        src: '../../images/ten.png',
        content: '\xa0\xa0\xa027包18包8包\xa0\xa0植物原木抽纸300张整箱批发（可点击）',
        price: '29.9',
        pin: '已团3万件',
        title: '商品详情'
      },
      { isshow:11,
        url: '../goods/goods',
        src: '../../images/two.png',
        content: '\xa0\xa0\xa027包18包8包\xa0\xa0植物原木抽纸300张整箱批发（可点击）',
        price: '10.9',
        pin: '已团114万件',
        title: '商品详情'
      },
      {
        isshow:12,
        url: '../goods/goods',
        src: '../../images/three.png',
        content: '\xa0\xa0\xa027包18包8包\xa0\xa0植物原木抽纸300张整箱批发（可点击）',
        price: '29.9',
        pin: '已团3万件',
        title: '商品详情'
      },
      {
        isshow:13,
        url: '../goods/goods',
        src: '../../images/four.png',
        content: '\xa0\xa0\xa027包18包8包\xa0\xa0植物原木抽纸300张整箱批发（可点击）',
        price: '29.9',
        pin: '已团3万件',
        title: '商品详情'
      },
      {
        isshow:14,
        url: '../goods/goods',
        src: '../../images/five.png',
        content: '\xa0\xa0\xa027包18包8包\xa0\xa0植物原木抽纸300张整箱批发（可点击）',
        price: '29.9',
        pin: '已团3万件'
      },
      {
        isshow:15,
        url: '../goods/goods',
        src: '../../images/six.png',
        content: '\xa0\xa0\xa027包18包8包\xa0\xa0植物原木抽纸300张整箱批发（可点击）',
        price: '29.9',
        pin: '已团3万件',
        title: '商品详情'
      },
      {
        isshow:16,
        url: '../goods/goods',
        src: '../../images/seven.png',
        content: '\xa0\xa0\xa0睡衣女夏短袖丝绸性感夏天女人薄款大码家居服两件套冰',
        price: '29.9',
        pin: '已团3万件',
        title: '商品详情'
      },
      {
        isshow:17,
        url: '../goods/goods',
        src: '../../images/eight.png',
        content: '\xa0\xa0\xa027包18包8包\xa0\xa0植物原木抽纸300张整箱批发（可点击）',
        price: '29.9',
        pin: '已团3万件',
        title: '商品详情'
      },
      {
        isshow:18,
        url: '../goods/goods',
        src: '../../images/nine.png',
        content: '\xa0\xa0\xa027包18包8包\xa0\xa0植物原木抽纸300张整箱批发（可点击）',
        price: '29.9',
        pin: '已团3万件',
        title: '商品详情'
      },
      {
        isshow:19,
        url: '../goods/goods',
        src: '../../images/ten.png',
        content: '\xa0\xa0\xa027包18包8包\xa0\xa0植物原木抽纸300张整箱批发（可点击）',
        price: '29.9',
        pin: '已团3万件',
        title: '商品详情'
      },
      {
        isshow:20,
        url: '../goods/goods',
        src: '../../images/ten.png',
        content: '\xa0\xa0\xa027包18包8包\xa0\xa0植物原木抽纸300张整箱批发（可点击）',
        price: '29.9',
        pin: '已团3万件',
        title: '商品详情'
      },
      {
        isshow:21,
        url: '../goods/goods',
        src: '../../images/ten.png',
        content: '\xa0\xa0\xa027包18包8包\xa0\xa0植物原木抽纸300张整箱批发（可点击）',
        price: '29.9',
        pin: '已团3万件',
        title: '商品详情'
      },
      {
        isshow:22,
        url: '../goods/goods',
        src: '../../images/ten.png',
        content: '\xa0\xa0\xa027包18包8包\xa0\xa0植物原木抽纸300张整箱批发（可点击）',
        price: '29.9',
        pin: '已团3万件',
        title: '商品详情'
      },
      {
        isshow:23,
        url: '../goods/goods',
        src: '../../images/ten.png',
        content: '\xa0\xa0\xa027包18包8包\xa0\xa0植物原木抽纸300张整箱批发（可点击）',
        price: '29.9',
        pin: '已团3万件',
        title: '商品详情'
      },

    ],

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  update(){

  },
  pindan(){

  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
