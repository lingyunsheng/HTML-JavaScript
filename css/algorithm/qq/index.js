let qq_number = "6317sos58924 ";
//函数表达式
/**
 * 
 * @param  qq  type String
 * @return tupe bool
 * @功能 判断QQ号是否合格
 * @desc 只能是数字 长度五位数以上 13位以内
 */
const is_valid_qq = (qq) => {
    if(!qq) return false;
    if(/^[0-9]{5,13}$/.test(qq)){
        return true;

    }
    else {
        return false;
    }
    //console.log(qq);
    //.length
    return true;
};
 console.log(is_valid_qq(qq_number));


 let enc_qq = [6, 3, 1, 7, 5, 8, 9, 2, 4],
  qq = [];
const dec_qq = (enc_qq, qq) => {
  let head = 0;
  let tail = enc_qq.length;
  while (head != tail) {
    qq.push(enc_qq[head++]);
    enc_qq.push(enc_qq[head++]);
    ++tail;
  }
};
dec_qq(enc_qq, qq);
console.log(enc_qq);
console.log(qq);
