function information(name, sex, height, birthday, color, likes, follow, age) {
    console.log(user.name);
}
// 放到json中
let user = {"name":'熊云松', "sex":'男', "height":178, birthday:'7-13', color:'黄', likes:'你懂的', follow:['周杰伦'], age:18}
// 如何优化参数
// information('熊云松', '男', 178, '7-13', '黄', '你懂的', ['周杰伦'], 18);
information(user);

