const https = require('https');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
// 服务端的 $ jquery
const url = 'https://mobile.yangkeduo.com/?refer_page_name=recommended&refer_page_id=10272_1558100730828_qycFfBxde2&refer_page_sn=10272';
const imageDir = './images/';
// 爬取每一页的方法

https.get(url, (res) => {
    res.setEncoding('utf-8');

    // 源源不断收到数据 每收到就触发data事件
    let html = '';
    res.on('data', (chunk) => {
        // console.log(chunk);
        html += chunk;
    });
    // 数据发完
    res.on('end', () => {
        // 可以用的 html
        const $ = cheerio.load(html);

        $('.item').each(function () {
            // this 在那个作用域下查找 每一部电影
            // 默认全局 每次都找第一张
            const picUrl = $('.pic a img', this).attr('src');

            // console.log(picUrl);
            downloadImg(picUrl);
        })
        // 文件名下标示一下 数据页数
        
    })
})


    function downloadImg(picUrl) {
        https.get(picUrl, (res) => {
            res.setEncoding('binary');
            let imageData = ''
            res.on('data', (chunk) => {
                imageData += chunk;

            })
            res.on('end', () => {
                fs.writeFile(imageDir + path.basename(picUrl),
                    imageData,
                    'binary',
                    (err) => {
                        if (!err) {
                            console.log('image downloading:',
                                path.basename(picUrl))
                        }
                    }
                )

            })
        })
    }
