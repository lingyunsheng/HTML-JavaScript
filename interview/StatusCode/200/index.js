const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

// 永久跳转会被浏览器记下来 所以要在浏览器清除缓存
const server = http.createServer((req, res) => {
    // 支持直接写入状态码 和writeHead一样
    res.statusCode = 200;
    // 告诉浏览器怎么处理，文本
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!');
})
server.listen(port);