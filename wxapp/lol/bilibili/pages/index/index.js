Page({
    data: {
        // 首页导航 
        // 被点击首页导航菜单索引
        currentIndexNav: 0,
        navList: [],
        swiperList: [],
        // 视频列表数据
        videosList: []
    },
    // 点击首页导航
    activeNav(e) {
        // console.log(123);
        this.setData({
            currentIndexNav: e.target.dataset.index
        })

    },
    getNavList() {
        let that = this;
        wx.request({
            url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
            success(res) {
                console.log(res);
                if (res.data.code === 0) {
                    that.setData({
                        navList: res.data.data.navList
                    })
                }
            }
        })
    },
    // 获取轮播图数据
    getSwiperList() {
        let that = this;
        wx.request({
            url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
            success(res) {
                if (res.data.code === 0) {
                    that.setData({
                        swiperList: res.data.data.swiperList
                    })

                }

            }
        })

    },
    getVideosList() {
        let that = this;
        wx.request({
            url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
            success(res) {
                if (res.data.code === 0) {
                    that.setData({
                        videosList: res.data.data.videosList
                    })
                }
            }
        })
    },
    onLoad() {
        // 获取首页导航数据
        this.getNavList();
        this.getSwiperList();
        this.getVideosList();
    }


})