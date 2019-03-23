## 界面大框架及经验
水平方向禁止滚动条，
垂直方向出现滚动条

- 水平和垂直两个方向都滚动 页面摇晃误操作
- 垂直方向一直滚动 是开发的趋势 主要方式
  
              /* 非pc 100% pc 960px */
            max-width: 960px;
            margin: 0 auto;
            /* 经典的跨设备页面处理 */
            /* 主流的产品 手机是主要的浏览物 */
            /* 手机 iPad  100%宽度 pc 960 左右留白良好显示 */

-margin:0 auto; max-width:960px 美元

- flex 布局
 flex-grow放大比例 flex-basis flex-strink 缩小
 flex-wrap
 当网页由pc到mobile时，缩小阵仗

 经验 简单的适配PC->> mobile照顾所有的用户
 Pc端大手大脚一点 max-width margin：auto
 padding margin
 mobile flex-shrink 让关键部分坚挺一点 
