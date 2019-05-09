小程序 canvas 找 cax

引入 cax组件
new cax.Stage()
形状
cax.Rect
add
update


- countdown 组件
文案 获取验证码 ？
开始计时 start
false|true
Page 为组件的调用者
组件  data + properties(外界传入)
<countdown start = "{{start}} />

- properties 有个observer 选项
当外界选的值改变时 会执行
组件是构成页面 是为页面打工的

- start 有外传到内properties
有利于页面操作关键状态

由外到内通过properties
内部组件通知页面？ 可以做

