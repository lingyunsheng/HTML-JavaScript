// 云函数入口文件
const cloud = require('wx-server-sdk')
// 环境
const env = 'yue-yva9q'

cloud.init()
//在云函数初始化后获取句柄 每隔云函数都要表明环境
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async (event, context) => {
  //  删除晕函数默认的 const wxContext = cloud.getWXContext()
  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
  const openid = cloud.getWXContext.OPENID
  let groupList = await db.collection('user-group').where({
    userId: openId
  })
  .get()
  let returnResult = []
  // let of let in
  for (let item of groupList.data) {
    const oneGroup = await db.collection('group')
    .where({
      _id: item.groupId, 
      // 做判断
      deleted: false
    })
    .get()
    // >0已经创建群组了
    if (oneGroup.data.length > 0) {
      const userInfo  = await db.collection('user')
      .where({
        // top bottom 类名
        openId: oneGroup.data[0].createBy
      })
      .get()
      oneGroup.data[0].createBy = userInfo.data[0]
      oneGroup.data[0].relateUserGroupId = item._id
      returnResult.push(oneGroup.data[0])
    }
  }
  return returnResult.sort((a, b) => a.createTime < b.createTime ? 1 : -1)

}