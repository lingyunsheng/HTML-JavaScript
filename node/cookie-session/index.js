const Koa = require('koa');
const Router = require('koa-router');
const koaSession = require('koa-session');
const staticServer = require('koa-static');
const path = require('path');
// 加密session信息
const session_signed_keys = ['secret'];
const app = new Koa();
const router = new Router();
app.keys = session_signed_keys;
// 重置状态
const sessionConfig = {
    key: 'sessionID', // 放在cookie里面
    // 单位毫秒
    maxAge: 1000 * 60,
    rolling: true // 每次响应的时候 刷新有效期
}
const session = koaSession(sessionConfig, app);
app.use(staticServer(path.join(__dirname, './static')));
app.use(session);
//  /user 用户页面; /post文章页面
// if (ctx.path === '/user'){} get方式请求路径，做什么事
// else if (ctx.path === '/post'){}
// router.get('/', async (ctx) => {
//     ctx.type = 'html';
//     ctx.body = `
//     <a href="/user">/user</a>
//     <a href="/post">/post</a>
//     `
// })试静态资源服务

// setcookie响应头
router.get('/user', async (ctx) => {
    ctx.cookies.set('name', 'value', {
        path: '/user',
        httpOnly: false
    })
    ctx.cookies.set('name1', 'value1')
    ctx.cookies.set('name2', 'value2', {
        path: '/user/abc'
    })
    ctx.body = 'user';
})
router.get('/post', async (ctx) => {
    ctx.body = 'post';
})
router.get('/user/abc', async (ctx) => {
    ctx.body = '/user/abc';
})
router.get('/login', async (ctx) => {
    const { name, password } = ctx.query;
    if(name === 'test' && password === 'test') {
        // 扩展了对象
        ctx.session.login = true;
        ctx.type = 'html';
        ctx.body = `
        <a href="/testlogin">测试登陆状态</a>
        `
    } else {
        ctx.session.login = false;
        ctx.body = 'error name and password';
    }
})
router.get('/testlogin', async (ctx) => {
    if (ctx.session.login) {
        ctx.body = '登陆成功';
    } else {
        // 重定向到登录页面
        ctx.redirect('/');
    }
})
app.use(router.routes());
app.listen(9999, () => {
    console.log('server is running 9999');
})