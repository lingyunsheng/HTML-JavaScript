// export default (str) => {
//   // 字符串按空格进行分割，保存数组，数组的元素的先后顺序就是单词的顺序
//   // 按字符
//   let arr = str.split(' ')
//   // map 对arr进行遍历 每项元素操作 结果返回给 result item 就是数组的每一个元素 每个元素进行反转
//   let result = arr.map(item => {
//     return item.split('').reverse().join('')
//   })
//   return result.join(' ')
// }

// export default (str) => {
//   // 字符串按空格进行分割，保存数组，数组的元素的先后顺序就是单词的顺序
//   // 按字符// map 对arr进行遍历 每项元素操作 结果返回给 result item 就是数组的每一个元素 每个元素进行反转
//   return str.split(' ').map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// }

export default (str) => {
  // 字符串按空格进行分割，保存数组，数组的元素的先后顺序就是单词的顺序
  // 按字符// map 对arr进行遍历 每项元素操作 结果返回给 result item 就是数组的每一个元素 每个元素进行反转
  return str.match(/[\w']+/g).map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}

//str.split(/\s/g)



// str.split(' ').map(item=>{
//   return item.split('').reverse().join()
// }).join()