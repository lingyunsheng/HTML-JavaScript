// 缓存计算结果 不要重复计算， 计算了的保存 哪里？ 方式？放在一个数据结构
// 对象字面量
let cache = {};
// 1,2,3   4,5,6  如何构造key
// json中key类型string <= argumens类数组

function mult() {
    // 参数数量是不定的
    let a = 1;
    let key = Array.prototype.join.call(arguments, ',');
    // args相关，数组=>string key
    // key 12*3
    // [1, 2, 3] => "1,2,3"
    // key是变量用'[]'
    if (cache [key]) {
        console.log('从缓存中取')
        return cache[key];
    }
    
    for(var i = 0, l = arguments.length; i < l; i++) {
        // arguments是类数组，要转变一下
        a = a * arguments[i];
    } 
    cache[key] = a;
    return a;
}
// 闭包不会销毁，用json key:value
console.log(mult(1,2,3));
console.log(mult(1,2,3));
console.log(mult(1,2,3));

