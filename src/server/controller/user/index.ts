import User from '../../model/User'

const UserController = {

  register: async (params) => {
    const { account, password } = params
    const user = await User.findOne({ account })
    if (user) {
      throw Error('This account is existed.')
    }
    const newUser = await User.create(params)
    return newUser
  },
  login: async (params) => {
    const { account, password } = params
    const user: any = await User.findOne({ account })
    if (user) {
      if (user.encryptPassword(password) === user.hashedPassword) {
        return user
      }
      throw Error('Your password is wrong.')
    }
    throw Error('This account is not existed.')
  },
  logout: async (params) => {

  },
  updateUser: async (params) => {

  },
  list: async () => {

  },
  detail: async (params) => {

  },
  getUserByToken: async (token) => {
    const user = await User.findOne({ token })
    return user
  }
}

export default UserController
