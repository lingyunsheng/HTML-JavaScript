

// 将文本拿到 去除html标签
const htmlStr='<p><em>lorem</em><strong>ipsum</strong></p>';
// lorem ipsum
// 正则 replace splice 规则 
// 字符串的replace函数可以替换抹些东西 可以允许正则来表示
const stripHTMLTags = str=>str.replace(/<[^>]*>/g,'');
// <[^>]*> []范围匹配   ^最前面是以什么开始  [^>]
// [0-9]* *多次 
// 15870414178

