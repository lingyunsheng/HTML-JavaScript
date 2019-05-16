前端安全

表单
form -> onsubmit -> url
POST data:{email:'zm@163.com',
           password:'123456' }


后端 登入过程 sql 查找的过程
sql 语法报错 服务器出错

用户的输入不可信任 
password' sql 的提前结束或多了一个'  500 产生语法错误
编码解码  加密解密防止用户输入错误

登入账号

pass = '' or 1=1--' ''语句结束 

传输信息的时候编码一下 encode escape
escape("password'")
"password%27" 转码

SELECT * from users
    WHERE email =
    'use@email.com'
    AND password =
    'password%27'   
escape 解决部分安全问题 编码