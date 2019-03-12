dom event(事件)
- dom
  onclick 事件注册只有一个 dom-0
  addEventListener('click') 不限 dom-2
  addEventListener('keyup') 不限 dom-3
-dom 事件流
捕获 (capture)
window -> document(documentElement)
-> body ->父级 ->目标元素
