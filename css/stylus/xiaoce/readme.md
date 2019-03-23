stylus 

 不再写css，写的是css的预编译语言stylus
 快

 脚本命令 stylus style.styl -o style.css
 compiled style.css 预编译
 一套语法，支持现代css开发，
 compile过程
 stylus style.styl -o style.css
 -o output 输出的 将style.styl 输出为style.css
 watch 一直监听style.stylw文件的修改 实时生成style.css文件

 1. 跟css的规则说goodbye byebye
    {} : ; tab

     优化文字的渲染 高清手机
     text-rendering optimizeLegibility

2. stylus 提供嵌套功能
   可能帮我们补上前面的选择器
   现在我们的css 模块化   从此css就有编程的感觉了
3. &运算符
   依然使用tabl缩进  但是它与上一级同级
   适用于同一个元素多个类名 .active
   或者为类，伪状态

4. 变量定义
   将常用的 重复使用的
   css不是编程语言 表达性的
   在最上面 统一定义后， 可以修改一处，
   所有使用此变量的地方都可以跟着修改
   成为网站的风格

css 语法
   1. overflow：hidden 
   2. flex align-items 搞定vertical-align有时不好搞的情况
   vertical-align 兄弟之间 img+兄弟
   3. text-rendering：optimizeLegibility；
   抗锯齿 高清手机是那个文字的边缘不出现锯齿
   4. flex：shrink
      flex-grow
   5. 第几个元素的选择
      :first-child : last-child
      :nth-child(2n): nth-child(2n+1)
   6. -apple-system





   html
    font-size 12px
    height 100vh
    background-color pink 
    font-family -apple-system,sans-serif
    text-rendering optimizeLegibility
    color #333333
    background-color #f4f5f5
img
    border-style none
    width auto
    height auto


 body 
    font-size 12px
    overflow-y scroll
    -webkit-overflow-scrolling touch

.book-card 
    max-width 720px
    margin 0 auto
    margin-bottom 12px
    box-shadow 0 1px 2px 0 rgba(0,0,0,.15)
    background-color #ffffff

 .book-bought 
    display flex
    border-top 1px solid #ecf0f3
    cursor pointer
    padding 8px 22px 8px 15px 

    .label 
            color #666666
            font-size 16px
            font-weight 400
            // 弹性布局
            display inline-flex
            align-items center
            flex-shrink 0
        // img
            // vertical-align  middle
            // 用于图片跟兄弟对其 不是内部的对齐
    .users
        height 24px
        overflow hidden
        display inline-block
        margin-left 24px
        flex-grow 1

        .user
            height 24px
            height 24px
            border-radius  50%
            background-size cover
            //不占据use的位置
            flex-shrink 0
            display inline-block
            margin-left 10px
            &:first-child
                margin-left 0
            &.active





