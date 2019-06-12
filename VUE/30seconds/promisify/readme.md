## promisify
promise 风格
回调版本：
    fs.readFile('',(err,data)=>{});
    promisify:
    readFile('')
    .then()
    让符合(err,data)=>{} 回调函数 使最后一个参数的函数
    包裹之后 返回 promise 版本的函数

## 实现这样一个 promisify