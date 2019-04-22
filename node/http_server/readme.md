- MVVM  前端前贵
Model 数据 Page({data:{
    legends:[
        {

        }
    ]
}})
View 视图
VM   {{}} 表示编译 数据符
 {{item.name}} 
 wx:for ....

- MVC 经典的Web开发模式
Model  => SQL
View  =>静态页面
Control =>路由 控制器

    .listen(3000); 访问 

- WebServer 软件程序
Web服务器硬件运行WebServer程序的
ip http协议 网站实现http的程序
http://127.0.0.1:3000
端口 不只一个服务
3306 MYSQL、 
80  Web服务  
http
    .createServer(function(request, response){
        //访问者 request 
        //response发送资源给用户 不是一个常连接 
        response.end('Hello World);

    })
    //监听 listener 通过http协议访问 建立http传输 比特流
    .listen(3000)
    创建一个服务器 在3000端口上  callback 用户 

    request 用户 N Web Server 一直在3000端口上伺服
    request 就能找到店 每位用户到达 触发我们的事件 调用 creatServer 上的回调函数  
    request 用户身份 response ？ Web Server 响应请求 http 后就断开

        丘陵之中，大山之下,农夫在砍着乔木，天气渐热，徒具疲惫之意，向南而行的潭水甚是清澈甜美，在山上等着他的究竟是舒适的休憩，还是木林之中的陷阱，公私分辨？ 打一名字：利用文中的词组 三字或者四字