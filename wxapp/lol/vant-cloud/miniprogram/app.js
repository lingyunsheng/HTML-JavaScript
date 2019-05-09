//app.js
// 获取用户授权，因为所有都要经过
App({
  // 给参数
  onLaunch: function (options) {
    const self = this
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
        env: 'yue-yva9q'
        
        //  加了就可以新建数组env: 'yue-yva9q'
      })
    }
    this.globalData.shareParam = options.query
    // 查询是否授权
    wx.getSetting({
      success(settingRes) {
        // 已经授权 就会有[] 字段
        if (settingRes.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: (infoRes) => {
              self.globalData.userInfo = infoRes.userInfo
              if (self.catchUserInfo) {
                self.catchUserInfo(infoRes.userInfo)

              }
              // 如果是旧用户的话
              wx.cloud.callFunction({
                name: 'createUser', 
                data: {
                  avatarUrl: infoRes.userInfo.avatarUrl,
                  name: '',
                  nickName: infoRes.userInfo.nickName,
                  sex: infoRes.userInfo.gender
                }

              })
            },
            fail: () => {console.log(err)},
            // complete: () => {}
          });

        } else {
          wx.redirectTo({
            // 跳转页面传参 ？拼接参数 onload 就会出现参数
            url: `/pages/login/login?back=${options.path.split('/')[1]}`
          })
        }
      }
    })
    wx.cloud.callFunction({
      name: 'getUserInfo',
      data: {},
      success(res) {
        self.globalData.userInfoFromCloud = res.result.storeUser
      }
    })
  },
  globalData: {
    currentGroupInfo: null,
    currentGroupUserList: [],
    currentBill: null,
    userInfo: null,
    shareParam: null,
    billId: '',
    userInfoFromCloud: null,
    userRemark: {}
  }
})
