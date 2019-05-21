// 结构意义: useObj 一个参数带来了新的问题,
// 代码的函数编写者，user里面的key要去了解
// 只需要用一部分， 解构可以帮助提高代码的可读性 要多少就解构多少个
function information({name, age, height}) {
    console.log(name, age, height);
}
// es6解构
const user = {
    name: '杨鹏',
    age: 22,
    height: 1.8,
    sex: '男',
    hobbbies: ['打游戏']
}

information(user);
