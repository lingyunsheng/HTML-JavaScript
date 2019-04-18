- 小程序开发工具 帮助我们初始化一个项目框架
小程序是架构在微信 （原生APP） 使用前端技术和思想
来快速开发 一份代码 到处运行

不用下载
不用写两次
快速高效


- html =>wxml (新标签)
weixin  wxml ? xml 为了他的性能优化以及新功能
有些新标签 view = div
css => wxss
js =>js bindtap =>onclick
page = wxml + wxss +js
小程序由一个个page组成 每个page又由这三个部分组成
app.json 是项目描述文件 添加的page要在app.json 里面声明切页面时 wx.navigaeTo()

- MVVM
只要你有数据 Model 在js中用data声明
Page({
    data:{
        legends:[]
    }
})
View 视图层 WXML 等待数据编译输出的html模板 {{}}
指令 循环输出 wx:for