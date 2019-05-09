// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'yue-yva9q'
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const userInfo = event.userInfo

  // 先查询有无用户的openId
  const checkUser = await db.collection('user')
  .where({
    openId: userInfo.openId
  })
  .get()
  // 如果有用户，则更新基本用户信息
  if (checkUser.data.length > 0) {
    await db.collection('user').doc(checkUser.data[0]._id)
    .update({
      data: {
        avatarUrl: event.avatarUrl,
        nickName: event.nickName,
        // 因为已经把sex负值给gender了
        sex: event.sex
      }
    })
  }  else {
    const insertResult = await db.collection('user').add({
      avatarUrl: event.avatarUrl,
      nickName: event.nickName,
      sex: event.sex,
      name: '',
      openId: event.userInfo.openId,
      createTime: new Date()
    })
  }
}