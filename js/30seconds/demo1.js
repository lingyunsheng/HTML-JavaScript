
// 高阶函数的考题 n 
// lary 运行结果是函数
// 箭头函数
const ary = (fn, n) => (...args) => fn(...args.slice(0, n));
const firstTwoMax = ary(Math.max, 2);
// x 数组每一项
console.log([[2, 6, 'a'], [8, 4, 6], [10]].map(x => firstTwoMax(...x)));
