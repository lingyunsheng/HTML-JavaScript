/* <script src="./http"></script> */
// require 关键字 引入一个模块 COMMONJS 国际化规则 引入模块机制定义


const http = require('http');
let i = 0;

http 
//创建服务器接收回调函数
    .createServer(function(request, response){
        response.end(`Hello World!${++i}`);
    })
    .listen(3000);