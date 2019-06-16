
const request = require('./request.js');
module.exports=(keyWord)=>{
    keyWord = encodeURIComponent(keyWord);
    const url='http://neteasecloudmusicapi.zhaoboy.com/search?keywords='+keyWord;
    return request(url);
    // return keyWord;
}