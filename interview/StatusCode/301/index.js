// 建立http机制
var http = require('http');
// createServer 启动HttpsServer，在端口进行服务，任何请求就callback处理。响应对象写入头部信息
var server = http.createServer(function(req, res) {
    // 响应头部 向用户返回东西的时候
    res.writeHead(301, {'Location': 'http://itbilu.com'})
    // 完成这次请求 结束
    console.log(res._header);
    // HTTP/1.1 301 Moved Permanently 协议版本，状态码，永久跳转
    // Location: http://itbilu.com    
    // Date: Fri, 14 Jun 2019 07:00:14 GMT
    // Connection: keep-alive
    // Transfer-Encoding: chunked
    res.end();
});

server.listen(3000);