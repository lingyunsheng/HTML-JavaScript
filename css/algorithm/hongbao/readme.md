如何实现红包算法
固定金额的红包  有若干个人来抢 规则？

1.抢到金额之和等于红包金额，不能超过也不能少于。
2.手气王，0.01 至少，
3.金额随机，随机数，保证公平性 每个人抢到金额的概率要相同

计算过程 变量计算的本质
发钱？ total =restAmount--
restNum-- = num
随机一次，restAmount =total-随机数
restNum--
最后一个人最后的钱 
单次循环 for(i=0;i<num-1;i++)
每次随机 钱值是我们需要的 push数组
总合，

Math是数学对象
Math.random()
parseFloat() 解析为浮点数
类型转换“23.2”=>23.2 parseFloat 
0-9之间的整数
Math.floor(math.random()*10)
let max =100;
let min =0;
最小值和最大值的数
min+Math.floor(Math.random()*(max-min))