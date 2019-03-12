# 作用域 Scope
document DOM 
 getElementsByTagName
 getElementsByClassName
 querySelector
 querySelectorAll
 整个body就是DOM
 window DOM
    全局定义了 var name ="yh";
    全局变量 js window(前端)
    局部变量 function(){ }
    window js 内嵌在浏览器中的脚本语言，它与其他语言不一样的地方在于
    顶级的 window
    全局变量挂载在window上
    console.log(name);或者console.log(window.name);都可以找到
    window 类型 typeof 数值型 字符串 bool值 undifined null Symbol object 标识类型 ES6
    const let 比var 优秀的地方 遵守块级作用域
    全局->函数局部->块级作用域
    scope 范围

    setTimeout 异步的内置函数
    for 循环 立即同步执行
    1000 之后 i var 变成了10
    let 块级作用域 for {块级作用域 let}
    1000 后
