const request = require('request');
// 选择符选中节点jquery 第三方引入
const cheerio = require('cheerio');

request('https://www.smzdm.com/youhui/', (err, res) => {
    if (!err) {
        console.log(res.body);
        const $ = cheerio.load(res.body, {
            // entities  空格&nbsp 不要解析html entities
            decodeEntities: false
        })
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
        })
    }
})

// 