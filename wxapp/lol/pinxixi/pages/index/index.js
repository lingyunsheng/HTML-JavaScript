
const WXAPI = require('../../wxapi/main');
const app = getApp();
Page({
  data: {
    nav: ['热门', '男装', '美妆', '手机', '食品', '医药', '电器',
      '汽车', '鞋包', '百货', '女装', '水果', '运动', '电脑', '家纺',
      '内衣', '家装', '母婴', '家具'],
    curNum: 0,
    goods: [],
    categories: [],
    activeCategoryId: 0,
    banners: [],
    toView: 'red',
    scrollLeft: 100,
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640',
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    block1lists: [
      {
        icons:'../../images/blkPic1.png',
        name: '限时秒杀'

      },
      {
        icons:'../../images/blkPic1.png',
        name: '断码清仓'

      },
      {
        icons:'../../images/blkPic1.png',
        name: '多多矿场'

      },
      {
        icons:'../../images/blkPic1.png',
        name: '品牌馆'
      },
      {
        icons:'../../images/blkPic1.png',
        name: '多多果园'
      },
      {
        icons:'../../images/blkPic1.png',
        name: '充值中心'

      },
      {
        icons:'../../images/blkPic1.png',
        name: '爱逛街'

      },
      {
        icons:'../../images/blkPic1.png',
        name: '9块9特卖'

      },
      {
        icons:'../../images/blkPic1.png',
        name: '电器城'
      },
      {
        icons:'../../images/blkPic1.png',
        name: '每日好店'
      }

    ],
    block2lists: [
      {
        icons:'../../images/blkPic1.png',
        name: '多多矿场'

      },
      {
        icons:'../../images/blkPic1.png',
        name: '品牌馆'

      },
      {
        icons:'../../images/blkPic1.png',
        name: '多多果园'

      },
      {
        icons:'../../images/blkPic1.png',
        name: '食品超市'
      },
      {
        icons:'../../images/blkPic1.png',
        name: '一份抽奖'
      },
      {
        icons:'../../images/blkPic1.png',
        name: '9块9特卖'

      },
      {
        icons:'../../images/blkPic1.png',
        name: '电器城'

      },
      {
        icons:'../../images/blkPic1.png',
        name: '每日好店'

      },
      {
        icons:'../../images/blkPic1.png',
        name: '品牌特卖'
      },
      {
        icons:'../../images/blkPic1.png',
        name: '领券中心'
      }

    ]

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
  scrollMove: function (e) {
    //获取滚动距离
    var left = e.detail.scrollLeft;
    //将滚动距离（位移）动态添给滚动条的left
    this.setData({
      viewleft: left
    })
  },
  tabnav: function (e) {
    let index = e.currentTarget.dataset.navindex
    this.setData({
      curNum: index
    })
  },
  imagesDetail(e) {

  },
  onLoad(res) {
    this.getNav();//顶部导航
    this.getBanners();//广告位banners
    this.getCategory();//分类类别
    this.listGoods();//商品列表
    var that = this;


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