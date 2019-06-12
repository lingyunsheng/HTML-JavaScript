const router = require('koa-router')();

router.get('/signin', async (ctx) => {
  // ctx.body = 'signin page';
  await ctx.render('signin');
})
router.post('/signin', async (ctx) => {
  const { name, password, repeatPass } = ctx.request.body;
  console.log(name, password, repeatPass);
  ctx.body = { code: 200 };
})
module.exports = router;