node 让js来到了后端

服务器端， Linux
文件系统操作 fs
连接数据库 db

没有DOM
文件读取 要花时间 定位文件参数1 打开文件，
将文件内容读取到内存中 输出到命令行
文件越大
花时间 js里异步 js单线程与语言
fs.readFile(path, 'utf8', function(err, data){

})

2. promise 让异步通过另外的解决方案
分开 Promise 是类  用于处理好是一部问题的
为了防止回调地狱 看到耗时问题 就用一个Promise实例
resolve 将控制权交给then 并且将结果通过resolve(data)
reject失败 catch(e){}
const fileApromise = new Promise((reslove,reject)=>{
    resolve(data);
    )
    fileAPromise
        .then(data=>{
            console.log(data);
        })