- 阮一峰的继承
    先看构造函数的属性 先继承
    构造函数被new的方式运行 this指向实例对象
    子类要拿到父类构造函数， 讲我萌的父类的构造函数 运行一下
    并且通过call/apply 指定this为子类对象
    

- call apply 区别
  手动指定函数内部 this的指向
  参数用法不一样
  偏向用apply
  apply 接受的是数组 [] arguments
  call 接收单个实例化参数
  Animal.apply(this, arguments);
  Aninaml.call(this, ...arguments);
  Aninaml.call(this, age, name, color);

- this 函数内部的this
  由运行方式决定 而非生成时决定
  1. 普通函数 bar();
  2. 对象的方法 
  3. call apply 指定 aniaml.call() animal.apply()
  4. 构造函数 
  5. 事件回调函数 this 指向事件对象
  6. bind 指定this 返回新的函数