/**
 * 
 * @param {number[]} piles 
 * @param {number} H 
 * @param {number} mid 
 * @return {boolean}
 */


function canEatAllBananas(piles, H, mid) {
    //一定是H小时
    let h = 0;
    //吃
    for (let pile of piles) {
        //每把数量多少除以吃的 向上取整
        h += Math.ceil(pile / mid);
    }
    return h <= H;

}


/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 * 
 */


//有效快速的拿到一小时吃的香蕉把数
function minEatingSpeed(piles, H) {
    let lo = 1;
    //最多香蕉的那把
    let hi = Math.max(...piles);
    console.log(hi);

    while (lo <= hi) {
        //lo尝试
        // let m = lo;
        let mid = lo + ((hi - lo) >> 1);
        console.log('---------', mid);
        // m正好可以呢？
        if (canEatAllBananas(piles, H, mid)) {
            hi = mid - 1;
        } else {
            lo = mid + 1;//最小改为中间值加一

        }



    }
    return lo;
}
// console.log(canEatAllBananas([3,6,7,11],8,4));
console.log(minEatingSpeed([3, 6, 7, 11], 8));
