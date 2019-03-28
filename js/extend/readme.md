Person  由prototype户型来解决它自身构造之外的原型上的属性或方法

原型对象会有她的构造函数 Person.prototype.constructor属性

第三者 实例
实例 跟Person 有什么关系， Person.prototype 有关系

JS 实例 是怎么来的呢？
new Person()来的
1.Person 函数运行 new的方式， this=>
newObject();
2. zl怎么拿到 Person.prototype原型上定义的方法
__prototype__属性
面向对象的本质 构造函数 原型 实例
构造函数 通过   prototype 属性 有对象
原型 通过 constructor 构造函数
构造函数生成的实例

3. 方法有prototype属性，值为对象  对象上可以开支
4. 任何对象都有__proto__指向它的原型对象
5. 原型对象上 有 constructor 属性 指向谁 他的构造函数

原型链