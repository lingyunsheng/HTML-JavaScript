// 随机，Math 0-1之间的随机数
// let ran_num=Math.random();
// ran_num1=parseFloat(ran_num).toFixed(2);
// 转为浮点数以后是number型
// console.log(typeof(ran_num));
// console.log(ran_num1);
// ran_num2=parseInt("23.122335").toFixed();
// console.log(ran_num2);


function hongbao(total,num){
    const arr=[];
     let restAmount=total; //余额初始化为总金额
     let restNum=num;

     for(let i=0;i<num-1;i++){
        // 还余一个人不发
        // 至少平均值的两倍
        let amount=parseFloat(Math.random()*(restAmount/restNum * 2)).toFixed(2);
        restAmount-=amount;
        restNum--;
        arr.push(amount);
     }
    //最后一个人需承担restAmount
     arr.push(restAmount.toFixed(2));
     return arr;
}
console.log(hongbao(20,44));
