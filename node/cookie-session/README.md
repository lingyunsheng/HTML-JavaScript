## why have cookie
设置方式，以及每一项意义，http
http 访问重复请求  http是无状态的，发一个请求就回应一个东西，不能回应记录
客户端 服务器 再次请求的时候 知道客户端是谁(保持登陆)
## -S
--save 
会在项目管理文件json，将文件放在"dependencies": {}
执行npm i. 就会在json文件里面寻找各个依赖并安装
本地开发安装的node_modules文件
服务器上面 只需要写的代码 不需要 上传node_module
## cookie
存在客户端: 发出请求的一方
document.cookie读取当前域名下的cookie
document.cookie = 'userName=myname' 写
js 操作: document.cookie
后端操作: npm init -y
安装依赖: npm i koa koa-router -S 
后端: 响应头
Set-Cookie: name1=value1; path=/; httponly

浏览器检查所有存储的cookie, 把符合当前作用范围的cookie放在http请求头发给服务器。
cookie有可能被用户禁用。

- cookie的内容: 
name:
value:
path: 规定 cookie 生效的路径  默认的path: / 无论访问什么都会出现
/           所有路径都可以拿到这个cookie
/user       /user 以及 /user/xxx 可以拿到
/user/xxx   /user/xxx 以及 /user/xxx/xx 可以拿到
max-age(s): 在几秒之后过期
httpOnly: HTTP三个√: true / false. 为true的时候就不能通过 js 获取cookie.

cookie有作用范围: 
path 
domain
用途: 会话的状态管理，保存用户的个性化设置(皮肤)

## session 会话
保存在服务端的。
没有规定写在浏览器里,靠后台语言实现的。一个请求就有会话
有很多个session
很多个用户 sessionID
npm i koa-session -S

## koa 第三方中间件
ctx: req+res 把请求信息拿下
ctx: {
    req,
    res,
}
第三方: koa-views ejs
往 ctx 上面扩展 80%
ctx: {
    req, 
    res,
    render: () => {}
}
调用 提供的 render()
cnpm i koa-static静态资源服务 把请求路径映射到磁盘资源.有index.html会自己打开

## LocalStorage sessionStorage cookie session 区别
