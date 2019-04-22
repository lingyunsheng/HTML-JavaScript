// 全局变量太多, Cache只为mult服务,空间的污染
// 函数里面的变量会运行后就消失 和全局不一样 所以不能定义cache放里面 用闭包
// 内部有function 会内外看变量冒泡查找
const mult = (function() {
    const cache = {};
    return function(...args) {
        let key = Array.prototype.join.call(args, ',');
        // for(key in)
        if(key in cache) {
            return cache[key];
        }
        let a = 1;
        for(let i = 0, l=args.length; i < l; i++) {
            a = a * args[i];
        }
        cache[key] = a;
        return a;
    }
})();
console.log(mult(1,2,3));