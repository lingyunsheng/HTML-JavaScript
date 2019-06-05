// pages/searchInfo/searchInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songList:null

  },
  btnclick(){
    wx.request({
      url: 'http://api01.6bqb.com/pdd/search?apikey=A051B1C1F9A85033ED65561F777E5242&keyword=手机&page=1', // 仅为示例，并非真实的接口地址
      data:data,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      },
      fail(res){
        console.log('请求失败');

      },
      complete(res){
        console.log('请求完成');
      }
    })

  },
  getHot(){
    let that = this;
    wx.request({
        url: 'https://v1.itooi.cn/tencent/songList/category',
        success(res) {
            console.log(res);
            if (res.data.code === 0) {
                that.setData({
                    songList: res.data.data.data
                })
            }
        }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
         this.getHot();
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