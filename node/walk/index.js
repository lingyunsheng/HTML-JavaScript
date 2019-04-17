const fs = require('fs');
const files = [];
//一步步  目录走下去 
const walk = function (path) {
   fs
    .readdirSync(path)
    //找到文件所在目录的路径
    .forEach(file =>{
        //生成一个新的路径
        const newPath = path + '/' + file;
        //同步得到文件的状态信息
        const stat = fs.statSync(newPath);
        console.log(stat);
        if(stat.isFile()){
           if(/\.js$/.test(file)){
               files.push(file);
           }

        }else if(stat.isDirectory()){
            walk(newPath);
        }
        // 文件？
        //      js文件? 正则
        // 目录?
        //    递归
        // console.log(item);
    })
   
    // fs.readdir(path, function(err, items){
    //     console.log(items);
    // }) 
    // console.log('拉拉拉');
}
walk('./src');
console.log(files);