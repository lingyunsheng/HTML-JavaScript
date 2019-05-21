// 云函数入口文件
const cloud = require('wx-server-sdk')
const request = require('request');
// npm i cheerio request -S  让依赖写到json中
// 选择符选中节点jquery 第三方引入
const cheerio = require('cheerio');

cloud.init()

function spiderYouhui() {
  return new Promise((resolve, reject) => {
    request('https://www.smzdm.com/youhui/', (err, res) => {
    if (err) {
      reject(err);
    }
    if (!err) {
        console.log(2);
        const $ = cheerio.load(res.body, {
            // entities  空格&nbsp 不要解析html entities
            decodeEntities: false
        })
        let list = [];
        // 分析页面结构
        $('.list.list_preferential').each(function() {
            // this限制当前这一项   html方法是jquery html() inner html 但会包含span标签替换为空格
            let title = $('.itemName a', this).html();
            title = title.replace(/<.*>.*<\/.*>/g, '');
            const price = $('.listTitle .red', this).text();
            const img = $('.picLeft img', this).attr('src');
            const desc = $('.lrInfo', this).text().trim();
            console.log({
                title, price, img, desc
            });
            list.push({
              title, price, img, desc
            });
        })
        resolve(list);
    }
})
  })
}
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();
  // 
  // await 后面接 promise 返回promise  resolve时候的值 等待异步
  // 执行爬虫
  // 书写顺序 执行顺序
  // try出错就到catch中
  try {
    const youhuiLists = await spiderYouhui();
    return {
      code: 200,
      youhuiLists
    }
  }
  catch(err) {
    return {
      code: 500
    }
  }
}
// 引入模块