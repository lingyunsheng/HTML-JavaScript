const Koa = require('koa');
// 应用的实例
// 监听端口,app用户看到的界面
const app = new Koa();
//  很多个
const admin = new Koa();
// 接受请求 req res 封装成 ctx。 body响应体   方法:use
app.use(async (ctx, next) => {
    console.log(1);
    // 没有回应  koa   没有回应  自己处理了  not found
    // 1交给下一个中间件
    await next();
    console.log(2);
})
// next下没有东西转上一个next
app.use(async (ctx, next) => {
    
    await next();
    console.log(4);
})
// use中间件nex
app.use(async (ctx) => {
    console.log(3);
    ctx.body = `hello Koa`;
})
app.listen(3000, () => {
    console.log('server is running 3000');
});
admin.listen(4000, () => {
    // console.log('server is running 4000');
});