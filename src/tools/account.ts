import jwt from 'jsonwebtoken'
import * as uuid from 'uuid'
import config from '../config'

// 更新 token, 保持单点登录
export const updateToken = async (user, req) => {
  const token = uuid.v4()
  req.session.token = token
  user.token = token
  return await user.save()
}
