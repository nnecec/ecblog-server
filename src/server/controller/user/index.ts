import User from '../../model/User'

const UserController = {
  // sign up
  signup: async (params) => {
    const { username, password } = params
    const user = await User.findOne({ username })
    if (user) {
      return null
      // throw Error('This username is existed.')
    }
    const newUser = await User.create(params)
    return newUser
  },
  // login
  login: async (params) => {
    const { username, password } = params
    const user: any = await User.findOne({ username })
    if (user) {
      if (user.encryptPassword(password) === user.hashedPassword) {
        return user
      }
      throw Error('Your password is wrong.')
    }
    throw Error('This username is not existed.')
  },
  // logout
  logout: async (params) => {

  },
  // change user profile
  updateUser: async (params) => {

  },
  // list all user
  list: async () => {

  },
  // query user detail
  detail: async (params) => {

  },
  // find user by token
  getUserByToken: async (token) => {
    const user = await User.findOne({ token })
    return user
  }
}

export default UserController
