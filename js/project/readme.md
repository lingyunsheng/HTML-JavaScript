### 值
- 数字
  - 整数 0 1 -1
  - 小数 浮点数 1.1 1.11
- 字符串 "abcds111\\sddfgf" "1"
  
- 布尔值 是 true 否 false

-》直接量

### 变量
设 x = 2;

变量-》 容器 -》 存值
    大小-》 直接量
      变量 =     地址<- 对象 ， <- 一个数字 一个字符串

声明：
   var x=2;var x; 声明=创建一个变量
   x= "hello world";

   var x = "hello world"; 声明和赋值一起;

   多个变量
   var x,y,z;
   x=1;
   y=2;
   z=3;

   var x=1,y=2,z=3;

   x 变量名
   1. 变量名 必须是数字字母 $ _组成
      - var qiuqiu1;
   2. 变量的开始 字母
   3. 变量的大小写敏感
   console.log("qiuqiu");

###运算符

表达式： 运算符
  a = 1 + 1;
运算符：
- 算数 + - * / %

   5/4 4*1 + 1 取模
   5%4=1
  10%4=2

顺序 从左往右 先 * / % 后 + -

  1+2*3=1+6=7

  优先级

值： 数字 字符串 布尔值 

加号：字符串 按字符处理 数字

     1+"a" = "1" + "a" ="1a"
     1 + fasle = 1+0=1
     fasle + "a" ="false"

  -* % 转成数字

  1-"1"=1-1=0
  1-"A"=NAN not a number
  +1=1
  -1=-1

赋值
 -= *= /= %=
 var a=1;
 a=a+10;
 var a+=10;
 var a-=10;

比较 布尔值
  a=1 >2 
  a ->=false
    <
   <=
   == 值 
   === 值和类型
   
逻辑
   布尔值  && 布尔值 ->布尔值
    ||
    !
true && false ->false
a && b a和b 都是true true false
a || b 有是true的吗
!a a=true false
var a=60;
var b=60;
if (a >=60 && b>=60)
    很高兴
    if(a<60 || b<60)
    挨揍
按位运算 >>
c++

###运算符
- 自增 自减

++自增1 -- 自减1

var a=1;

a++; -> a自增1 -> a=a+1;

a--; -> a自减1 -> a=a-1;

++a;先自增

a++;后自增

一元运算符 ++a

二元运算符 a+b

var a =1;

var b= ++a + 5;

a=a+1

var b=a+5

(++a)

a? 2
b?7

var a=1;

var b=a++ +5

a++

varb=a+5;

a=a+1;

a?2 
b?6

### 数据类型和转换

值： 数字 字符串 布尔值 

js ->弱类型var a;  强类型 c c++ string a="aaa"

原始类型：
 数字NUmber 字符串String 布尔值 Boolean undefined null;

 对象：Object

 查看对象的类型
 typeof
 var a; ->; undefined 未定义
 var a= null; 空的 Object 

 系统自带的对象 数组 函数

 自定义{}

 var a=1;

 var b="2" 

 系统：把原始类型排好
 三门课 -》 60 61 62
 var a=[60,61,62];
 下标 序号0 自增 ++
 a[0]->60
 a[1]->61
 a[2]->62

 自定义对象 
 var a1=60;
 var a2=61;
 var a3=62;
 {}
 var a={"a1":60,"a2":61,"a3":62}
 a.a1 ->60
  var a={0:60;1:61,2:62}
  a[0]->60








