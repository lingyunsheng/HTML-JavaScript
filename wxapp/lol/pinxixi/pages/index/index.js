
const WXAPI = require('../../wxapi/main');
const app = getApp();
Page({
  data: {
    navbar: ['热门', '男装', '美妆', '手机', '食品', '医药', '电器',
      '汽车', '鞋包', '百货', '女装', '水果', '运动', '电脑', '家纺',
      '内衣', '家装', '母婴', '家具'],
    currentTab:0,
    goods: [],
    categories: [],
    activeCategoryId: 0,
    banners: [],
    toView:'red',
    scrollLeft:100,
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  upper(e) {
    console.log(e)
  },
  lower(e) {
    console.log(e)
  },
  scroll(e) {
    console.log(e)
  },
  tap(e) {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove(e) {
    this.setData({
      scrollLeft: this.data.scrollLeft + 10
    })
  },
  navbarTab:function(e){
    this.setData({
      currentTab:e.currentTarget.dataset.idx
    })

  },
  onLoad() {
    this.getNav();//顶部导航
    this.getBanners();//广告位banners
    this.getCategory();//分类类别
    this.listGoods();//商品列表
  },
  getNav() {

  },
  getBanners() {
    WXAPI
      .getBanners({
        type: 'new'
      })
      .then(res => {
        console.log(res);
        if (res.code === 0) {
          this.setData({
            banners: res.data
          })
        }
      })
  },
  getCategory() { },
  listGoods() { }
})