const app = getApp()

Page({
  data: {
    files: []
  },
  chooseImage() {
    let that = this
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        console.log(res)
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        })
        for (let i = 0; i < res.tempFilePaths.length; i++) {
          const filePath = res.tempFilePaths[i]
          let a = filePath.lastIndexOf('.')
          let b = filePath.lastIndexOf('.', a - 1)
          let c =filePath.substring(b+1,a)
          const cloudPath = c + filePath.match(/\.[^.]+?$/)
          // 使用循环上传多张图片往服务器存图片
          wx.cloud.uploadFile({//一次只能上传一张图片
            filePath,
            cloudPath,
            success(res) {
              console.log('上传成功', res)
            },
            fail(err) {
              console.log('上传失败', err)
            }

          })

        }



      }
    })
  },
  previewImage(e) {
    console.log(e)
    wx.previewImage({
      current: e.currentTarget.id,
      urls: this.data.files
    })

  }

})