function binary_search(arr, data) {
    // 1.计算出min 中间的值， 小于往左 大于就往右
    // 2.重复做这件事

    // 退出条件，只有一个数了 

    let min = 0,
        max = arr.length - 1,
        mid;
    // 没得再分中间的时候
    while (min <= max) {
        mid = parseInt((min + max) / 2);
        // 不加我怎么去得一半呢？
        // 溢出
        // mid = min + (max - min) / 2;
        mid = min + ((max-min)>>1);
        // 位移运算
        // mid = (min + max) >> 1
        if (arr[mid] > data) {
            max = mid - 1;

        } else if (arr[mid] < data) {
            min = mid + 1;

        } else {
            return mid;
        }

    }
    return -1;

}
console.log(binary_search([1, 4, 7, 9, 10, 12], 10));

let arr = [];
// 数组太大
for (let i = 0; i < 100000000; i++) {
    // 二分查找哪个地方会有问题
    arr.push(i);

}
console.log(binary_search(arr, 2019));