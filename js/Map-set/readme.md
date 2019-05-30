## Map
类似与一个js对象
获取 对象 下面的所有 key
作用：
1. 优化逻辑判断 
if else switch-case
2. 被新的 api 支持  URLSearchParams


区别：
{} 的 key 是字符串 Symbol 其他类型在遍历 key 的时候 出现 toString() 的问题
app [object,HTNLelement];
Map() key 支持各个类型
var obj={} undefined
var obj={a:1,b:2} undefined
Object.keys(obj); ["a", "b"]