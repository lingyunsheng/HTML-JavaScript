const Koa = require('koa');
// 配置模版引擎 ejs
const views = require('koa-views');
// 配置静态资源
const koaStatic = require('koa-static');
const bodyParser = require('koa-bodyparser');
const path = require('path');
// const 
const app = new Koa();
// 路由
const signinRouter = require('./routers/signin.js');
const { PORT } = require('./config/default.js');

// router.get('/')
// router.get('/')
// router.get('/')
app.use(koaStatic(path.join(__dirname, './public')))
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))
app.use(bodyParser({
  formLimit: '1mb'
}))
app.use(signinRouter.routes());
app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
})