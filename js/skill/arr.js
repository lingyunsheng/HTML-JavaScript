const arr = [99, 0, 33, 1, 2];
const arr1 =[99,0,33,[101,202],1,2];
// const min = Math.min.apply(null,arr);
// const max = Math.max.apply(null,arr);

const min = Math.min(...arr);
const max = Math.max(...arr);
console.log(min,max);

// const min =arr[0];
// const max=arr[0];
// for(let i=0;i<arr.length;i++){
//     if(min>arr[i]){
//         min=arr[i];
//     }
//     if(max<arr[i]){
//         max=arr[i];
//     }

// }
// console.log(min,max);
