const koa = require('koa');
const views = require('koa-views');
const path = require('path');
const app = new koa();
// ejs 提供了 转 html 的中间件
// 告诉模板引擎在 哪个位置
app.use(
    views(
        path.join(__dirname, './view'), {
            extension: 'ejs'
        }
    )
)
const user = {
    name: '赵丽颖',
    post: [
        { id: 0, title: '流动的 SVG 线条' },
        { id: 1, title: 'vue.js 系统' },

    ]
}
const posts = [
    {
        id: 0,
        content: '赵丽颖 今天劈叉炒作了吗'
    },
    {
        id: 1,
        content: '赵丽颖今天昆仑饭店吃了吗'
    }
]
app.use(async (ctx) => {
    // req res 处理请求 响应东西
    // /user 用户的主页 
    // req.url 解析出请求的地址
    if (ctx.path === '/user') {
        // user ejs 模板引擎
        await ctx.render('user', {
            user
        });
    } else if (ctx.path === '/post') {
        // get 请求的 查询参数 ?name=a&age=b {name: age:}
        const { id } = ctx.query;
        // string posts number
        const post = posts.find(item => item.id == id);
        await ctx.render('post', { post })
    }
    else {
        ctx.body = '无法处理该路径' + ctx.request.url
    }
})
// .listen 就是 HTTP原生 http 。listen
app.listen(8080, () => {
    console.log('server is running 8080');
})