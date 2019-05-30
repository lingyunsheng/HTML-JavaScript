- DOM 之后 MVVM兴起
MVVM(还是做了dom编程，用框架) 封装了 DOM(VUE REACT)  让其更高效  数据绑定 自动更新
- 组件开发  UI开发
  将一个复杂页面分为多个组件， 拼装页面
  是一个（事件，样式）类，
  组件实例化一下，就可以用了
  多实例化几次就可以复用
- 组件是一个粽子， 里面有很多东西的,最基本的是
  template 在react中是render()
  css 
  js isLiked 
Uncaught SyntaxError: Invalid shorthand property initializer等号改为:
- React 和 VUE 都是mvvm的实现
  React用来做后台界面  VUE适合做用户界面
  挂载点 界面跟组件的关系，界面 <- 组件 <- html
  DOM 被封装成一个组件类 qs修改某一
  在构造函数中 construt this.state 数据部分
  模板部分 render方法 bind
  setData = setState({})进一步实现组件调用
- 模板里数据的细化
  es6的字符串模板  每次编译 
  每次setData之后就执行this.render();
  状态和模板结合的地方在模板的编译，插入数据 
  setState 驱动模板重新编译一下 数据驱动 s