// var num1=1234567890222222222222222222222222222222222222222222222222222222222222222222222222;
// var num2=12321212122222222222222222222222222222222222222222222222222222222222;
// console.log(num1+num2);
let num1 = '111111111111111111111111111111111111111111111111111111111';
let num2 = '222222222222222222222222222222222222222222222222222222222';
function addTwoNumbers(str1, str2) {
    let carry = 0,//是否有进位
        l1 = str1.length,//数字1的长度
        l2 = str2.length,//数字2的长度
        arr = [];//为编程字符串大致做准备
    var max = Math.max(l1, l2);//最大长度
    for (let i = l1 - 1, j = l2 - 1, n = max - 1; n >= 0; n-- , i-- , j--) {
        //倒着循环 退出条件是最大值的[0]
        // 同一位相加再加之前的进位 进位既是flag 又是要加的值
        var sum = (+str1[i] || 0) + (+str2[j]||0) + carry;
        // 设置carry 得到正确的位
        if (sum >= 10) {
            carry = 1;
            arr.push(sum - 10);
        } else {
            carry = 0;
            arr.push(sum);
        }
        // 最后还有进位，
        if(carry>0){
            arr.push(carry);
        }
        return arr.reverse().join('');
    }

}
console.log(addTwoNumbers(num1, num2));