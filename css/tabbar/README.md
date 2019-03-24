# tabbar

#### 项目介绍
移动端多个页面公共 t底部abbar 写法，用js方法写公用的tabbar

#### 软件架构
tabbar样式借用了jQ weui的样式，但是在不同页面引入的。自己写样式也是ok的。

#### 使用说明

1. 在需要加公共 tabbar 的页面引入 foot.js ；
2. 每个需要引入的页面写一个隐藏的input，赋予不同的 value 值（按 0、1、2、3、...排列），用于进入页面时判断需要加 tab_active 的项；
3. 在公共css中加选中项的文字样式（即给 tab_active 加所需的样式）；
4. 选中时的 icon 名称应在未选中时的名称后面加 “1”。

#### 码云特技

1. 使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2. 码云官方博客 [blog.gitee.com](https://blog.gitee.com)
3. 你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解码云上的优秀开源项目
4. [GVP](https://gitee.com/gvp) 全称是码云最有价值开源项目，是码云综合评定出的优秀开源项目
5. 码云官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6. 码云封面人物是一档用来展示码云会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)