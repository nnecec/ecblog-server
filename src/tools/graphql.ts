import User from '../server/controller/user'

export const getRootValue = async (req) => {
  console.log(req)

  const token = req.session.token
  let root = {}
  if (token) {
    root['user'] = await User.getUserByToken(token)
  }

  return root
}
