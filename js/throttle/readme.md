search suggest 搜索建议可以 帮助用户快速找到他想找的内容
坤 蔡徐坤 陈坤
宝 宝宝 宝宝树 宝马
根据词匹配 分词
蔡徐坤篮球 
xukun cai basketball 有必要每打一次keyup都去搜索吗
防止多次 性能问题
打完一个单词再去搜 basketball

定时器实现了防抖  debounce 函数利用闭包  返回一个新函数的方式 
将定时器的id 封闭在我们的必报空间中 所以下一次的keyup事件 会消除上一次的 settimeout
只有最后一个keyup间隔时间超过 delay 得以执行
在频繁触发时 只执行一次