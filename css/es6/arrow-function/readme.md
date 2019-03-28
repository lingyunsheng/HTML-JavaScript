## 怎么用
- 只有一个参数可以省略
- 函数只有一条语句可以省略 {} return
返回对象时候 ()

## arguments
- 所有函数中都可用的局部变量
- [arg1,arg2,arg3]

## 普通函数箭头函数 区别
- 箭头函数不支持重名形象
普通函数可以
- 箭头函数没有 this, 他的this 指向定义时 所处的上下文（外部函数）
 this
- 箭头函数不能通过 .call .apply ...改变箭头函数的this
- 箭头函数没有 .prototype 
- 箭头函数不能作为构造函数
- 箭头函数没有 arguments
- 箭头函数 没有 new.target

## new.target
es6新增
一般用在构造函数 返回 new 作用的那个构造函数

## 类数组
- 有 length属性
- 可以通过 索引 获取值
- Array.from 从类数组对象中创建一个新数组
