script 放在头部 影响性能优化
http请求 n+1
尽量将链接减少
异步
DOM 树 有html结构 再加上css DOM树 将被生成
静态页面就有了document.DOMContentLoaded 有了元素节点 
就可以做js交互了
页面上还依赖于其他的资源 js,阻塞下载
img 是网页性能的杀手
window.onload 此时写js就晚了

如果不等事件的发生 js 操作有可能无效
