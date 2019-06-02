Page({
  data: {
    isLike: true,
    // banner
    imgUrls: [
      '//t00img.yangkeduo.com/t04img/images/2018-06-03/a2a9c4f596faa47e2a387751f4aa8e39.jpeg?imageMogr2/format/webp/quality/50',
      '//t00img.yangkeduo.com/t09img/images/2018-06-01/d48e3e2294cea2ddf7f52211d218657f.jpeg?imageMogr2/format/webp/quality/50',
      '//t00img.yangkeduo.com/t05img/images/2018-06-03/a4a01001373b85b521b1db9e64ff32ee.jpeg?imageMogr2/format/webp/quality/50',
      '//t00img.yangkeduo.com/t01img/images/2018-06-03/3728f696f66f4a6da1bee861afdf6e73.jpeg?imageMogr2/format/webp/quality/50',
      '//t00img.yangkeduo.com/t03img/images/2018-06-03/8009baf6f2a86704fb9d137af8bad103.jpeg?imageMogr2/format/webp/quality/50',
      '//t00img.yangkeduo.com/t05img/images/2018-06-03/af0e581e74acb90343c162a08b0cd1b4.jpeg?imageMogr2/format/webp/quality/50',
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4119613175,2906257134&fm=27&gp=0.jpg',
    ],
    indicatorDots: false, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s
 
    // 商品详情介绍
    detailImg: [
      '//t00img.yangkeduo.com/t04img/images/2018-06-03/a2a9c4f596faa47e2a387751f4aa8e39.jpeg?imageMogr2/format/webp/quality/50',
      '//t00img.yangkeduo.com/t09img/images/2018-06-01/d48e3e2294cea2ddf7f52211d218657f.jpeg?imageMogr2/format/webp/quality/50',
      '//t00img.yangkeduo.com/t05img/images/2018-06-03/a4a01001373b85b521b1db9e64ff32ee.jpeg?imageMogr2/format/webp/quality/50',
      '//t00img.yangkeduo.com/t01img/images/2018-06-03/3728f696f66f4a6da1bee861afdf6e73.jpeg?imageMogr2/format/webp/quality/50',
      '//t00img.yangkeduo.com/t03img/images/2018-06-03/8009baf6f2a86704fb9d137af8bad103.jpeg?imageMogr2/format/webp/quality/50',
      '//t00img.yangkeduo.com/t05img/images/2018-06-03/af0e581e74acb90343c162a08b0cd1b4.jpeg?imageMogr2/format/webp/quality/50',
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4119613175,2906257134&fm=27&gp=0.jpg',
    ],
  },
  //预览图片
  previewImage: function (e) {
    var current = e.target.dataset.src;
 
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imgUrls // 需要预览的图片http链接列表  
    })
  },
  // 收藏
  addLike() {
    this.setData({
      isLike: !this.data.isLike
    });
  },
  // 跳到购物车
  toCar() {
    wx.switchTab({
      url: '/pages/cart/cart'
    })
  },
  // 立即购买
  immeBuy() {
    wx.showToast({
      title: '购买成功',
      icon: 'success',
      duration: 2000
    });
  },
})