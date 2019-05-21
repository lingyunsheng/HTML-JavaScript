// 设置默认值 es6解构同时
function information({name= '没有留下', age= 0, height= 174}) {
    console.log(name, age, height);
}
information({});