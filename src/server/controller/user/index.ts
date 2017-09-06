import User from '../../model/User'

const UserController = {

  register: async (params) => {
    const { account, password } = params
    const user = await User.findOne({ account })
    if (!user) {
      throw Error('This account is existed.')
    }

  },
  login: async (params) => {

  },
  logout: async (params) => {

  },
  updateUser: async (params) => {

  },
  list: async () => {

  },
  detail: async (params) => {

  }
}

export default UserController
