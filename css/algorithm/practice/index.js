function hongbao (total,num) {
    const arr=[];
   let resAmount=total;
   let resNum=num;
    for(let i=0;i<num-1;i++){
        let resAmount=parseFloat(Math.random()*(resAmount/resNum *2)).toFixed(2);
        resAmount-=amount;
        resNum--;
        arr.push(amount);


    }
    arr.push(restAmount.toFixed(2));
    return arr;

}
console.log(hongbao(20,44));