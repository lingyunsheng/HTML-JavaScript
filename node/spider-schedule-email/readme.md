npm init -y
npm i superagent -S
npm i cheerio -S
## $
x.find() 查找 x 元素下面的内容 $('.box').find('p');
\s 空白字符
.replace(/\s/g, ""); 去除无用的空白字符

## 
promise.all([promise组成的数组])
返回一个 promise。所有promise resolve 的时候 它才resolve。 
resolve 时候的值 就是 [所有promise] resolve组成的数组

## 模板引擎
发漂亮的邮件 需要发送 html
html 不是静态的  需要数据填充
{{ name }}
{ name } 变量编译进去
模板引擎 同理
编译成 html


ejs node 模板引擎

MVC
jsp
node 模板引擎 承载页面 (view)
ejs jade
<%= %>变量
<% %> 就是执行
