// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    currentIndex:0,
    category:[
      {
        categoryId:1,
        categoryName:'手机数码',
        ishaveChild:true,
        children:[
          {
            child_id: 1,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 2,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 3,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 4,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          }

        ]

      },
      {
        categoryId:2,
        categoryName:'美妆个护',
        ishaveChild:true,
        children:[
          {
            child_id: 1,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 2,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 3,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 4,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          }

        ]

      },
      {
        categoryId:3,
        categoryName:'食品饮料',
        ishaveChild:true,
        children:[
          {
            child_id: 1,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 2,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 3,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 4,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          }

        ]

      },
      {
        categoryId:4,
        categoryName:'品质男装',
        ishaveChild:true,
        children:[
          {
            child_id: 1,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 2,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 3,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 4,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          }

        ]

      },
      {
        categoryId:5,
        categoryName:'家居百货',
        ishaveChild:true,
        children:[
          {
            child_id: 1,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 2,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 3,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 4,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          }

        ]

      },
      {
        categoryId:6,
        categoryName:'家用电器',
        ishaveChild:true,
        children:[
          {
            child_id: 1,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 2,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 3,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 4,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          }

        ]

      },
      {
        categoryId:7,
        categoryName:'运动户外',
        ishaveChild:true,
        children:[
          {
            child_id: 1,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 2,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 3,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 4,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          }

        ]

      },
      {
        categoryId:8,
        categoryName:'充值中心',
        ishaveChild:true,
        children:[
          {
            child_id: 1,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 2,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 3,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 4,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          }

        ]

      },
      {
        categoryId:9,
        categoryName:'鞋靴箱包',
        ishaveChild:true,
        children:[
          {
            child_id: 1,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 2,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 3,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 4,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          }

        ]

      },
      {
        categoryId:10,
        categoryName:'内裤衣袜',
        ishaveChild:true,
        children:[
          {
            child_id: 1,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 2,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 3,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 4,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          }

        ]

      },
      {
        categoryId:11,
        categoryName: '电脑办公',
        ishaveChild:true,
        children:[
          {
            child_id: 1,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 2,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 3,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 4,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          }

        ]

      },
      {
        categoryId:12,
        categoryName:'流行女装',
        ishaveChild:true,
        children:[
          {
            child_id: 1,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 2,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 3,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 4,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          }

        ]

      },
      {
        categoryId:13,
        categoryName: '母婴玩具',
        ishaveChild:true,
        children:[
          {
            child_id: 1,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 2,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 3,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 4,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          }

        ]

      },
      {
        categoryId:14,
        categoryName:'汽车车品',
        ishaveChild:true,
        children:[
          {
            child_id: 1,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 2,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 3,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 4,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          }

        ]

      },
      {
        categoryId:15,
        categoryName:'家纺布艺',
        ishaveChild:true,
        children:[
          {
            child_id: 1,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 2,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 3,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 4,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          }

        ]

      },
      {
        categoryId:16,
        categoryName:'水果生鲜',
        ishaveChild:true,
        children:[
          {
            child_id: 1,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 2,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 3,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 4,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          }

        ]

      },
      {
        categoryId:17,
        categoryName:'家具家装',
        ishaveChild:true,
        children:[
          {
            child_id: 1,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 2,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 3,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 4,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          }

        ]

      },
      {
        categoryId:18,
        categoryName:'海外精选',
        ishaveChild:true,
        children:[
          {
            child_id: 1,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 2,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 3,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 4,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          }

        ]

      },
      {
        categoryId:19,
        categoryName: '医药健康',
        ishaveChild:true,
        children:[
          {
            child_id: 1,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 2,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 3,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 4,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          }

        ]

      },
      {
        categoryId:20,
        categoryName:'品牌推荐',
        ishaveChild:true,
        children:[
          {
            child_id: 1,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 2,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 3,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          },
          {
            child_id: 4,
            name: '樱桃',
            image: "https://m.360buyimg.com/mobilecms/s357x357_jfs/t15613/296/2281640440/392160/6e019064/5a9a450dNa47bf95f.jpg!q50.jpg"
          }

        ]

      },
   
    
    ],
   

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

  },
  leftNav:function(e){
    let index = e.currentTarget.dataset.index
    let id = e.currentTarget.dataset.id
    this.setData({
      currentTab:index,
      currentIndex:id
    })

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