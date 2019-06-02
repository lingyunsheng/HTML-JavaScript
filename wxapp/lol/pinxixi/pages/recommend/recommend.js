// pages/recommend/recommend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    ]


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})