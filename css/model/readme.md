 - 响应式网站的概念
 - 响应式优缺点
 - 浏览器
 - 媒体查询
 
 
 
 
 - @media all and (min-width:760px) and (max-width="960px"); 
        width视口宽度 height视口高度 device-width渲染屏幕的宽度  device-height
        aspect-ratio 高度比 
- viewport 视口
width 视口宽度
device-width 屏幕宽度
  layout viewport 布局视口 960px
  visual viewport 可视视口 不断改变 用户在手机端的  屏幕设备 查看页面移动缩放
  ideal viewport 理想视口 布局视口在一个设备上的最佳尺寸 不许缩放
  优化
  <meta name="viewport" content="width=device-width"/>


  网站开发前的工作
  根据需求和设计图
  - 怎样分析设计图
    - 和设计师交流
    是否相应的设计规范 字体 颜色 字号 间距
    什么地方100%还原 灵活处理
  - 分析结构
    - 好的结构很总要
    - 布局 看每个部分的元素如何排列 大中小屏幕
    - 切图ps sketch

响应式网站设计时间原则
 - progressive enhancement 渐进增强
 - graceful degradation 优雅降级

 - 针对网站性质 网站的受众 
 - chrome调试
-  两大观点
     - 不管设备大小 相同内容
     - 设备大小不同 显示不同

-断点
 - 断点的选择
   - 0-480px 小屏幕
   - 481-800px 中屏幕
   - 801-1400px 大屏幕
   - 1400+ 巨屏幕

- 优雅降级

项目目录结构

- 约定由于配置
- 约定代码结构命名
- css/*.css
-js

 |aaa|111|222

 这是一行代码<script>

  -  px(一个px相当于一个像素)
  -  em 相对的长度单位 相对参照物为父元素的font-size em具有集成的特点 1em=16px
  -  rem 相对参照物位根元素html
  fz 62.5% 1rem=10px
  fz 100% 1re=16px



  