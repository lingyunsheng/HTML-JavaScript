类型检测是 js 考点

<!-- new Array() [] -->

Object
Array 可遍历的对象
JSON Object 对象字面量 可枚举的对象 for(key in) 
function 是一等对象

typeof 不靠谱

类型判断的核心

1. Object.prototype.toString()
弥补typeof半调子 []
返回值 "[Object Object]"
2. 借给Array 用
Object.prototype.toString.call([])
函数上就有call, 动态指定内部this的指向
3. js的面向对象
Type{isString}
4. 立即执行函数 + 嵌套函数 闭包
type 就在这些嵌套函数被调用时可以被引用到




typeof []
"object"

Object
ƒ Object() { [native code] }
Object.prototype
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
Object.prototype.toString()
"[object Object]"
function Person(){}
undefined
var xl=new Person();
undefined
xl.toString()
"[object Object]"
xl.__proto__
{constructor: ƒ}
constructor: ƒ Person()
__proto__: Object
xl.__proto__.__proto__
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
xl.toString();
"[object Object]"
Object.prototype.toString.call([])
"[object Array]"
Object.prototype.toString.call([])
"[object Array]"