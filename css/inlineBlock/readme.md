#BFC 是一个什么概念
Block Formatting Context (块级格式上下文)

# BFC 的原理 (渲染规则)
1.正常的文档流会存在边距折叠问题 (父子元素，兄弟元素)，
水平方向的外边距不存在折叠的情况
(因为水平方向不存在块级元素)
2.BFC容器不会与浮动元素的box重叠 显著效果建立一个隔离的空间
3.BFC在页面上的一个独立的容器 最显著的效果就是建立一个隔离的空间 
外面的元素不会因为里面的元素改变 反之里面的元素也不会影响容器外面的元素
4.计算BFC容器高度的时候，浮动元素也会参与高度的计算(也是通常清除浮动的原理)

# 创建BFC的条件
1.float的值不为none
2.display设置为inline-block

BFC的创建方法

根元素或其它包含它的元素；
浮动 (元素的float不为none)；
绝对定位元素 (元素的position为absolute或fixed)；
行内块inline-blocks(元素的 display: inline-block)；
表格单元格(元素的display: table-cell，HTML表格单元格默认属性)；
overflow的值不为visible的元素；
弹性盒 flex boxes (元素的display: flex或inline-flex)；

但其中，最常见的就是overflow:hidden、float:left/right、position:absolute。也就是说，每次看到这些属性的时候，就代表了该元素以及创建了一个BFC了。

作者：网易考拉前端团队
链接：https://juejin.im/post/59b73d5bf265da064618731d
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。











BFC
浮动元素和绝对定位元素，非块级盒子的块级容器（例如 inline-blocks, table-cells, 和 table-captions），以及overflow值不为“visiable”的块级盒子，都会为他们的内容创建新的BFC（块级格式上下文）。
为了便于理解，我们换一种方式来重新定义BFC。一个HTML元素要创建BFC，则满足下列的任意一个或多个条件即可：

1、float的值不是none。
2、position的值不是static或者relative。
3、display的值是inline-block、table-cell、flex、table-caption或者inline-flex
4、overflow的值不是visible

BFC是一个独立的布局环境，其中的元素布局是不受外界的影响，并且在一个BFC中，块盒与行盒（行盒由一行中所有的内联元素所组成）都会垂直的沿着其父元素的边框排列。