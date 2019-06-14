const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

// 永久跳转会被浏览器记下来 所以要在浏览器清除缓存
const server = http.createServer((req, res) => {
    // 302临时走一下
    res.writeHead(302, {'location': 'http://itbilu.com'});
    console.log(res._header);
    // HTTP/1.1 302 Found  没有永久 也没有缓存了
    // location: http://itbilu.com
    // Date: Fri, 14 Jun 2019 07:29:57 GMT
    // Connection: keep-alive
    // Transfer-Encoding: chunked
    res.end();
})
server.listen(port);