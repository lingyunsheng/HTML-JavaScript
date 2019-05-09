小程序canvas 找cax

引入 cax组件
new cax.Stage()
形状
cax.Rect 
add
update

- countdown 组件
  有一个文案， 获取验证码？ 开始计时  start  false|true 
  Page 为组件的调用者 properties
  组件  data(内部自身的数据) + properties(外界传入)
  <countdown start="{{start}}" />
- properties属性 有个observer选项 
  当外界传的值改变时， 会执行
  组件是构成页面的, 是为页面打工的

- start 由外传到内properties 关键状态一定要交给外面
  有利于页面操作关键状态
  由外到内通过properties,
  内部组件通知页面?  可以做
