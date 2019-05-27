// 云函数入口文件
// 小程序要给服务器再给接口服务API
const cloud = require('wx-server-sdk');
const request = require('request');
// 加密的
const crypto = require('crypto');

cloud.init()
const getSessionKey = function(code) {
  return new Promise((resolve, reject) => {
    // https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code
    request({
      method: 'GET',
      url: 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code',
      qs: {
        appid: '	wxeae00915600c9e68',
        secret: '2044de4d9916e063b9c9c16f96820c83',
        js_code: code,
        grant_type: 'authorization_code'
      },
      // body响应体转为json格式的
      json: true
    }, (err, res, body) => {
      if(err) {
        reject(err)
      }
      resolve(body)
    })
  })
}
// 云函数入口函数
exports.main = async (event, context) => {
  // 捕获代码错误
  try {
    const { code } = event;
    const weixinRes = await getSessionKey(code);
    const { openid, session_key } = weixinRes;
    // 1:创建一个哈希加密的算法
    // 2: 对谁加密
    // 3: 以什么格式输出 hex 16进制
    const skey = crypto.createHash('sha1')
    .update(session_key, 'utf8')
    .digest('hex')
    // 保存服务器的一个信息
    // 返回session key
    return {
      skey
    }
  } catch (error) {
    return {
      error
    }
  }
}