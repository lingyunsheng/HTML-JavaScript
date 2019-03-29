1. mixin 与 函数的区别
    minxin 是一段样式的封装 可以在
    引用的地方复用 stylus 使用的
    最多的
    函数有返回值 random(min,max)
    函数和混合

2. stylus 有内置的函数库
     floor 向下取整 math(0,'random')
     unit(,'px')拼接一个变量
3. 200个元素 stylus for
    for num in 1..200
       .g-ball:nth-child({num})
         //将我们的变量进行编译
         $width = random(0,40)
         width = unit($width, 'px')
4. filter contrast(20) 
     mix-blend-mode:screen;
     