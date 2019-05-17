// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse:wx.canIUse('button.open-type.getUserInfo')

  },
  onGoUserInfo(e){
    if(e.detail.userInfo){
      var that =this;
      wx.navigateTo({
        url:'../../pages/index/index'
      })
    }else{
      wx.showModal({
        title:'警告',
        content:'未授权',
        showCancel:false,
        confirmText:'返回授权',
        success(res){
          if(resizeBy.confirm){
            console.log('success')
          }
        }
      })
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var that =this;
    wx.getSetting({
      success:function(res){
        if(res.authSetting['scope.userInfo']){
          wx.getUserInfo({
            success:function(res){
              that.queryUserInfo();
              wx.navigateTo({
                url:'../../pages/index/index'
              })
            }
          })
        }
      }
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