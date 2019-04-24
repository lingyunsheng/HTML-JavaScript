- wxml 是模板 {{}} 是要被编译的，
用户看到的不是wxml 是wxml 被js data 填充编译后的页面
Page 不是wxml 是wxml+js+wxss合体 compile
- setData({
    相应数据时
})触发重新compile

- 我们会在wxml里把所有的逻辑及对数据的渴求全部表达出来
在某一刻页面只会显示当前状态的页面状态 跟数据息息相关
状态 有数据决定 数据变成 改变数据 setData 界面自动变
数据驱动的界面 这就是MVVM
只要数据和页面状态唯一

- todos
  健身
  表单吧
  js dom 加 todos [] appendChild
  data:{
      todos:[]
  }
  form submit this.setData()

- {{js 运行区域}}
- input 有意思？ =》 todos