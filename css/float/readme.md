浮动 float：left
     float：right

清除浮动    
1.在父元素底部加一行代码 <div style="clear:both"></div>
2.利用BFC简称为"会计格式化上下文"来给父元素增加css div.content{
    overflow: auto; 块级格式化
    <!-- overflow: hidden; -->
    <!-- overflow: scroll; -->
}
3.使用css中的after伪元素，给父元素添加一个clearfix的类名
.clearfix::after {
    conten:'';
    clear:both;
    display:block;
}
4.给父元素增加一行css 高度坍塌的问题
.content {
    float:felt;
}
不建议使用j
5.一个更优雅的改进 --尼古拉斯大师 方法
把display设置为table 可以创建一个单元表格 反一下
这个匿名的表格单元可以直接触发BFC
.clearfix:after {
    content: '';
    display:table;
}
<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        ul li {
            list-style: none;
        }
        .item {
           font-size: 20px;
           width: 50px;
           height: 40px;
           text-align: center;
           float: left;
        }
        .blue {
            background-color: blue;
        }
        .red {
            background-color:red;
        }
        .green {
             background-color: green;
        }
        .pink {
            background-color: pink;
        }
    </style>
</head>
<body>
    <div class="page">
        <ul class="items">
        <li class="item blue">1</li>
        <li class="item red">2</li>
        <li class="item green">3</li>
        <li class="item pink">4</li>
    </ul>
    </div>
</body>
</html> -->