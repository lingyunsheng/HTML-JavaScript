dom event(事件)
- dom
  onclick 事件注册只有一个 dom-0
  addEventListener('click') 不限 dom-2
  addEventListener('keyup') 不限 dom-3
-event
  event.stopProgrtion()阻止事件冒泡
-dom 事件流
捕获 (capture)
window -> document(documentElement)
-> body ->父级 ->目标元素
冒泡 (bubble)
window <-document(documentElement)
<-body <-父级 <-目标元素
事件按照 DOM流 的顺序执行我们的事件回调
处于目标阶段的时候 事件调用取决于事件注册的顺序

- 事件代理 (事件委托)
event-question.html
原理：冒泡
