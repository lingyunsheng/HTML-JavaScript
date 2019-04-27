import util from '../../utils/index'

import config from '../../utils/config'

let app = getApp()
let isDEV = config.isDev

let handler = {
    data: {
        page: 1,
        days: 3,
        pageSize: 4,
        totalSize: 0,
        hasMore: true,
        articalList: [],
        defaultImg: config.defaultImg,
        hiddenLoading: false
    },
    onLoad() {

    },  // 拿到util的request方法
    requestArtical() {
        util.request({
            url: 'list',
            mock: true,
            data: {
                tag: '微信热门',
                start: this.data.page || 1,
                days: this.data.days || 3,
                pageSize: this.data.page || 4,
                langs: config.appLang || 'en'
            }

        })
        .then(res =>{
            console.log(res);
        })
    }
}
Page(handler)