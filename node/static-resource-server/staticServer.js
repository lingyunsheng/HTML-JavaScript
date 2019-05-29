const http = require('http');
const fs = require('fs');
const path= require('path');

http.createServer((req, res) => {
    // console.log(req.url);
    // 响应图片
    //  /static/index.html ->
    //  /static/xxx.png ->
    const url = req.url;
    // ^ 
    if (/^\/static\//.test(url)) {
        staticServer(req, res);
    }

    // fs.readFile('./index.html', 'binary',
    //     (err, file) => {
    //         res.write(file, 'binary');
    //         res.end();
    //     })
})
    .listen(8080, () => {
        console.log('server is running 8080');
    })

function staticServer(req, res) {
    // url对应的磁盘路径
    let url = req.url;
    console.log('url', url);
    if(url === '/static/') url += 'index.html';
    const filePath = path.join(__dirname, url);
    console.log(filePath);
    // fs.exists(url, exists => {
    //     console.log(exists);
    //     if (!exists) {
    //         res.end(`the request url:${url} was not found`)
    //     } else {
            console.log('-----------------------')
            fs.readFile(filePath, 'binary', (err, file) => {
                if (!err) {
                    res.write(file, 'binary');
                    res.end();
                }
            })
        // }
    // })

}