Page({
  data: {
    city: '南昌',
    imageUrl: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    items: []
  },
  onLoad () {
    let that = this
    wx.request({
      url: 'https://www.easy-mock.com/mock/5ca2c29464930718b239eb94/lm/new-movie-list',
      data: {},
      method: 'GET',
      header: {'Content-type': 'application/json'},
      success: function(res) {
        console.log(res)
        that.setData({
          items:res.data.data.movieList
        })
      }
    })
  }
})



































// // pages/main/index.js
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     city: '南昌',
//     imageUrl: [
//       'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
//       'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
//       'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
//       ],
//       items:[]
//     },
    



// onLoad(){
//   let that = this;
//   wx.Request({
//     url:'https://www.easy-mock.com/mock/5cbeb415d2955f5e587f9353/maoyan/maoyan',
//     data:{},
//     method:'GET',
//     header:{'Content-Type': 'application/json'},
//     success:function(res){
//       console.log(res)
//     }

//   })

// },

// /**
//  * 生命周期函数--监听页面初次渲染完成
//  */
// onReady: function () {
//   console.log(2)
// },

// /**
//  * 生命周期函数--监听页面显示
//  */
// onShow: function () {
//   console.log(3)
// },

// /**
//  * 生命周期函数--监听页面隐藏
//  */
// onHide: function () {
//   console.log(4)
// },

// /**
//  * 生命周期函数--监听页面卸载
//  */
// onUnload: function () {
//   console.log(5)
// },

// /**
//  * 页面相关事件处理函数--监听用户下拉动作
//  */
// onPullDownRefresh: function () {

// },

// /**
//  * 页面上拉触底事件的处理函数
//  */
// onReachBottom: function () {

// },

// /**
//  * 用户点击右上角分享
//  */
// onShareAppMessage: function () {

// }
// })
// //   imgUrls: [
// //     'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
// //     'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
// //     'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
// //   ],
// //   indicatorDots: false,
// //   autoplay: false,
// //   interval: 5000,
// //   duration: 1000,

// // },
// // changeIndicatorDots(e) {
// //   this.setData({
// //     indicatorDots: !this.data.indicatorDots
// //   })
// // },
// // changeAutoplay(e) {
// //   this.setData({
// //     autoplay: !this.data.autoplay
// //   })
// // },
// // intervalChange(e) {
// //   this.setData({
// //     interval: e.detail.value
// //   })
// // },
// // durationChange(e) {
// //   this.setData({
// //     duration: e.detail.value
// //   })
// // },

// /**
//  * 生命周期函数--监听页面加载
//  */