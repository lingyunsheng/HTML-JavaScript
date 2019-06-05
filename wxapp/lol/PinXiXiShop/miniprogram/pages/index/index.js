
const WXAPI = require('../../wxapi/main');
const app = getApp();
Page({
  data: {
    icoImg:'http://t00img.yangkeduo.com/goods/images/2019-06-02/1276dd7070482ef57900a160295f1886.png?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp',
    icoSrc:'../../images/goTop.png',
    nav: ['热门', '男装', '美妆', '手机', '食品', '医药', '电器',
      '汽车', '鞋包', '百货', '女装', '水果', '运动', '电脑', '家纺',
      '内衣', '家装', '母婴', '家具'],
    curNum: 0,
    name: 0,
    viewleft:0,
    title:0,
    show:true,
    animationData:{},
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
    categories: [],
    activeCategoryId: 0,
    banners: [],
    toView: 'red',
    scrollLeft: 100,
    imgUrls: [
      '//t00img.yangkeduo.com/t04img/images/2018-06-03/a2a9c4f596faa47e2a387751f4aa8e39.jpeg?imageMogr2/format/webp/quality/50',
      '//t00img.yangkeduo.com/t09img/images/2018-06-01/d48e3e2294cea2ddf7f52211d218657f.jpeg?imageMogr2/format/webp/quality/50',
      '//t00img.yangkeduo.com/t05img/images/2018-06-03/a4a01001373b85b521b1db9e64ff32ee.jpeg?imageMogr2/format/webp/quality/50',
      '//t00img.yangkeduo.com/t01img/images/2018-06-03/3728f696f66f4a6da1bee861afdf6e73.jpeg?imageMogr2/format/webp/quality/50',
      '//t00img.yangkeduo.com/t03img/images/2018-06-03/8009baf6f2a86704fb9d137af8bad103.jpeg?imageMogr2/format/webp/quality/50',
      '//t00img.yangkeduo.com/t05img/images/2018-06-03/af0e581e74acb90343c162a08b0cd1b4.jpeg?imageMogr2/format/webp/quality/50',
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4119613175,2906257134&fm=27&gp=0.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    block1lists: [
      {
        icons: '../../images/blkPic1.png',
        name: '限时秒杀'

      },
      {
        icons: '../../images/blkPic3.png',
        name: '断码清仓'

      },
      {
        icons: '../../images/blkPic2.png',
        name: '多多矿场'

      },
      {
        icons: '../../images/blkPic4.png',
        name: '品牌馆'
      },
      {
        icons: '../../images/blkPic5.png',
        name: '多多果园'
      },
      {
        icons: '../../images/blkPic10.png',
        name: '充值中心'

      },
      {
        icons: '../../images/blkPic4.png',
        name: '爱逛街'

      },
      {
        icons: '../../images/blkPic5.png',
        name: '9块9特卖'

      },
      {
        icons: '../../images/blkPic2.png',
        name: '电器城'
      },
      {
        icons: '../../images/blkPic7.png',
        name: '每日好店'
      }

    ],
    block2lists: [
      {
        icons: '../../images/blkPic6.png',
        name: '多多矿场'

      },
      {
        icons: '../../images/blkPic7.png',
        name: '品牌馆'

      },
      {
        icons: '../../images/blkPic8.png',
        name: '多多果园'

      },
      {
        icons: '../../images/blkPic9.png',
        name: '食品超市'
      },
      {
        icons: '../../images/blkPic11.png',
        name: '一份抽奖'
      },
      {
        icons: '../../images/blkPic1.png',
        name: '9块9特卖'

      },
      {
        icons: '../../images/blkPic13.png',
        name: '电器城'

      },
      {
        icons: '../../images/blkPic14.png',
        name: '每日好店'

      },
      {
        icons: '../../images/blkPic15.png',
        name: '品牌特卖'
      },
      {
        icons: '../../images/blkPic16.png',
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
  onPageScroll: function (e) {
    console.log(e.scrollTop);
    if (e.scrollTop > 300) {
      this.setData({
        showTop: false
      })
    } else {
      this.setData({
        showTop: true
      })
    }
  },
  goTop(){
    wx.pageScrollTo({
      scrollTop:0,
      duration:300
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
    // this.tabnav();
    this.getNav();//顶部导航
    this.getBanners();//广告位banners
    this.getCategory();//分类类别
    this.listGoods();//商品列表
    var that = this;
    // 动画效果
    var animation = wx.createAnimation();
    setInterval(function(){
      var show = !that.data.show;
      that.setData({
        animationData:animation.export(),
        show:show
      })
    },9000)



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