const _= require('lodash');
// 深度问题一般是两层[101,202,[303]]flatten
const arr1 =[99,0,33,[101,202,[303]],1,2];
const arr2 = [2,1,2];
const users =[
    {user:'fred',age:48},
    {user:'barney',age:36},
    {user:'fred',age:40},
    {user:'barney',age:34},
]
const sortedUser = _.sortBy(users,['user','age']);
console.log(sortedUser);
const uinqArr2=_.uniq(arr2);
console.log(uinqArr2);
const flattenArr1 = _.flattenDeep(arr1);
console.log(flattenArr1);