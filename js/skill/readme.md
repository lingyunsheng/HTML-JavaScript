## URL
- protocol : host:port pathname search
- ?name=lilei&sex=female
查询字符串 分为两部分 ？ 和 ？后
？ 开始的地方  search的开始  &

h5 api 文件api 文件操作  url处理api 存储api canvas webgl
如何去解析url中的 参数部分 查询
查询参数


?name=lilei&sex=female
?name=lilei&sex=female:22 URLSearchParams {}
?name=lilei&sex=female:23 lilei
?name=lilei&sex=female:33 (2) ["name=lilei", "sex=female"]
?name=lilei&sex=female:76 Live reload enabled.
getQueryString()
?name=lilei&sex=female:33 (2) ["name=lilei", "sex=female"]
{name: "lilei", sex: "female"}
"?a=1&b=2&c=3&d=4"
"?a=1&b=2&c=3&d=4"
'?a=1&b=2&c=3&d=4'.substr(1);
"a=1&b=2&c=3&d=4"
'?a=1&b=2&c=3&d=4'.substr(1).split(/&/g)
(4) ["a=1", "b=2", "c=3", "d=4"]
'?a=1&b=2&c=3&d=4'.substr(1).split(/&/g).forEach(item=>{
    console.log(item.split('=')[0],[1]);})
VM622:2 a [1]
VM622:2 b [1]
VM622:2 c [1]
VM622:2 d [1]
undefined

 npm i lodash