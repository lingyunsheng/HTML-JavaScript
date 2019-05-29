## 静态资源
上传服务器 资源 不会随着服务运行而改变内容： html css js 图片
1. 如果  有 index.html 打开
2. 否则 列出所有文件
3. 请求 路径 和 磁盘路径 一一 对应

请求
/static/*.* 磁盘目录static 下面 一一对应
### 打开方式
file:// 本地文件读取协议 ./xx.png ok
http://localhost:8080/ http 协议
html 里面引入的资源 都会发出请求


## 上传图片
### formidable
处理请求的 第三方请求的包
fields 非input[type="file"]的提交项
fiels input[type=‘files] 提交项
根据input 的 name 属性 来获取值



创建服务器
const http=require('http');
const fs=require('fs');
const path = require('path');


http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-type':'text/html'
    })
    re.end({
        ``

    })
}).listen(8080,{
    console.log('the server port is 8080');

})


 npm init -y
 npm i formidable -S