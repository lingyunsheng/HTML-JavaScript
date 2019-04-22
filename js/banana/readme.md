蜗牛爱吃香蕉

N piles banana 每pile banana 有不同数量的bananas

4把香蕉[3,6,7,11]
[30,11,23,4,20]
每个小时可以吃某一pile里的n只香蕉
规定h小时内一定要吃完 如何找到最优解
吃每把香蕉的时候 要不就是m只 要不就是剩下的

koko bananas
- 把香蕉吃完函数 canEatAllBananas一小时m只 一次只吃一把
return h<=H 
- while去疯狂的试用
1，2，3，4，5，6........math.max(...piles)
能拿到结果 便是太慢了
最大的来吗？
中间 最大的概率最快的 二分查找
二分查找优化查找的效率

简单查找 时间开销是 n
二分查找写法是有规律的
min max
x y 要找的是最小的可疑的min 可以来优化的
找中间 mid = x+((y-x)>>1) 小了 
mid + 1新的x
大了mid-1 新的y
log2N