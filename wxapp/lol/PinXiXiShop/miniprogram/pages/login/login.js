const app = getApp()

Page({
	data: {
		logged: !1,
		userInfo: {},
		hasUserInfo: false,
		canIUse: wx.canIUse('button.open-type.getUserInfo'),

	},
	onLoad: function () {
		if (app.globalData.userInfo) {
			this.setData({
				userInfo: app.globalData.userInfo,
				hasUserInfo: true
			})
		} else if (this.data.canIUse) {
			// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
			// 所以此处加入 callback 以防止这种情况
			app.userInfoReadyCallback = res => {
				this.setData({
					userInfo: res.userInfo,
					hasUserInfo: true
				})
			}
		} else {
			// 在没有 open-type=getUserInfo 版本的兼容处理
			wx.getUserInfo({
				success: res => {

					app.globalData.userInfo = res.userInfo
					this.setData({
						userInfo: res.userInfo,
						hasUserInfo: true
					})
				
				}
			})
		}
	},
	getUserInfo: function (e) {
		console.log(e)
		app.globalData.userInfo = e.detail.userInfo
		this.setData({
			userInfo: e.detail.userInfo,
			hasUserInfo: true
		})
	},

    onShow() {
    	// const token = App.WxService.getStorageSync('token')
    	// this.setData({
    	// 	logged: !!token
    	// })
    	// token && setTimeout(this.goIndex, 1500)
    },
    login() {
    	wx.switchTab({
			url:'../index/index'
		})
    },
    // goIndex() {
    // 	App.WxService.switchTab('../index/index')
    // },
	// showModal() {
	// 	App.WxService.showModal({
    //         title: '友情提示', 
    //         content: '获取用户登录状态失败，请重新登录', 
    //         showCancel: !1, 
    //     })
	// },
	// wechatDecryptData() {
	// 	let code

	// 	App.WxService.login()
	// 	.then(data => {
	// 		console.log('wechatDecryptData', data.code)
	// 		code = data.code
	// 		return App.WxService.getUserInfo()
	// 	})
	// 	.then(data => {
	// 		return App.HttpService.wechatDecryptData({
	// 			encryptedData: data.encryptedData, 
	// 			iv: data.iv, 
	// 			rawData: data.rawData, 
	// 			signature: data.signature, 
	// 			code: code, 
	// 		})
	// 	})
	// 	.then(data => {
    //         console.log(data)
	// 	})
	// },
	// wechatSignIn(cb) {
	// 	if (App.WxService.getStorageSync('token')) return
	// 	App.WxService.login()
	// 	.then(data => {
	// 		console.log('wechatSignIn', data.code)
	// 		return App.HttpService.wechatSignIn({
	// 			code: data.code
	// 		})
	// 	})
	// 	.then(res => {
	// 		const data = res.data
	// 		console.log('wechatSignIn', data)
	// 		if (data.meta.code == 0) {
	// 			App.WxService.setStorageSync('token', data.data.token)
	// 			cb()
	// 		} else if(data.meta.code == 40029) {
	// 			App.showModal()
	// 		} else {
	// 			App.wechatSignUp(cb)
	// 		}
	// 	})
	// },
	// wechatSignUp(cb) {
	// 	App.WxService.login()
	// 	.then(data => {
	// 		console.log('wechatSignUp', data.code)
	// 		return App.HttpService.wechatSignUp({
	// 			code: data.code
	// 		})
	// 	})
	// 	.then(res => {
	// 		const data = res.data
	// 		console.log('wechatSignUp', data)
	// 		if (data.meta.code == 0) {
	// 			App.WxService.setStorageSync('token', data.data.token)
	// 			cb()
	// 		} else if(data.meta.code == 40029) {
	// 			App.showModal()
	// 		}
	// 	})
	// },
	// signIn(cb) {
	// 	if (App.WxService.getStorageSync('token')) return
	// 	App.HttpService.signIn({
	// 		username: 'admin', 
	// 		password: '123456', 
	// 	})
	// 	.then(res => {
    //         const data = res.data
    //         console.log(data)
	// 		if (data.meta.code == 0) {
	// 			App.WxService.setStorageSync('token', data.data.token)
	// 			cb()
	// 		}
	// 	})
	// },
})