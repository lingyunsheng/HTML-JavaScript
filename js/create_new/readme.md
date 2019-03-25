new 的时候发生了什么？

构造函数的运行方式是以new的方式被运行
内部的this 运态指向实例化后的对象

空对象？ 开始时是空的
之后 拿到了构造函数里的属性
最后又拿到了prototype上定义的属性和方法

对象？ 由属性和方法

1.实例化一个新的对象 并且是这个类的实例
2.在new的过程中构造函数被执行 this指向实例
constructor 运行慢半拍
 在面向对象的时候是为他人服务的 位this服务
 构造函数是为他人服务
 this由函数的运行方式决定
this指向他的实例 new this->实例 new
this->任何对象 call Otaku.call(obj,"yh",18)
3. Otaku.prototype 值是对象
原型对象
任何函数都拥有一个prototype属性 才能构造类
火车 constructor 车头  
车头上勾着车身 原型链