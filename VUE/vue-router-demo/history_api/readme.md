vue 单页应用开发
不用刷新页面
路由使命  导航 低栏 舞台 （三块）
- 理论支持
  SPA: single page application单页应用开发  导航(nav)不动， footer也不动， 中间的body(main.content)是切换的， 页面不需要刷新的，空白页(因为没有建立链接) 
  传统web开发之中， 空白(新的web请求点击链接重新加载，页面白一下，加载一下: 体验很糟糕) 页(get)
  对应路由把相应组件切换出来，不需要从服务器走。 像APP一样(没有加载进度条)

- jquery on 事件api
$(document).on(event_type, child_nodes, fn);
- 没有前端路由(负责根据路由调用组件)， 但是可以通过 后端路由(构建网站资源路由,restful, mvc router)  /xxx.html 怎么不依赖这个，通过前端路由来调出内容
- 不用打开链接就可以把内容搞出来，挖个隧道a到b取东西。ajax可以主动请求另外一个页面。
  切换链接页面不刷新 让url变化且不刷新
- 前端路由两种做法，hashtag #不刷新页面;  history pushState api url的path部分改变了，但是没有刷   新页面。
  state? 这次跳转url对应的状态数据
  title, 
  url 一个url一个状态
  



