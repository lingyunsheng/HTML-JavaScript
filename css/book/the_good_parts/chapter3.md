# 对象字面量学习笔记
- 对象字面量

 1. 对象字面量即
 Object,通过key:value的形式,描述出对象,语法的规则是{}
 2. 对象有属性和方法
 只要对象上有recevieFlower这个方法的对象, 都可以收花。接口Interface。
 3. 对象字面量的定义方法
 var xsj={}
 const xsj{
     属性名：属性值，
 }
 对象可以嵌套
 const xsj={
     name:'徐士杰',
     age:19,
     address:{
         sheng:'江西',
         shi:'南昌',
         bianma:2300
     }
 }
 4. 检索
    xsj[name];
    xsj.address.bianma 纯常数
    检索不存在的属性返回untified
5. 更新
    xsj[name]='徐氏杰',直接用赋值语句
    若不存在的属性即纳入该对象中。
    xsj.nickname='kavein',
6. 引用
   var x=xsj;
   x.nickname="kavien";
   var nick=xsj.nickname 传递值
   引用同一个对象
7. 原型反射
   typeof xsj.name 会产生一个值
8. 枚举和删除
   枚举通过遍历出所有的属性名
   delete xsj.nickname;

