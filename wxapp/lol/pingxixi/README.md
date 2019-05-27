## session key
当前用户会话操作时效性，维护用户的登陆状态。
时效性: 和用户的使用频率

通过 checkSession 检查

## getUserInfo
返回的敏感数据 可以配合session_key 解密
加密session_key  返回