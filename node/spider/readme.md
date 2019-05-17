
爬虫
PS C:\workspace\node\spider> npm init


Press ^C at any time to quit.
package name: (spider)
version: (1.0.0)
description: a spier
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to C:\workspace\node\spider\package.json:

{
  "name": "spider",
  "version": "1.0.0",
  "description": "a spier",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes)
PS C:\workspace\node\spider>

npm i cheerio -S


##爬虫

http 请求
html -> 浏览器 解析
     ->服务端  普通文本信息  有价值的 解析出来 爬虫

## node

cheerio $ 解析 html attr('src) text()
去浏览器里面看
