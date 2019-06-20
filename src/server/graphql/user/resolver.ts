import { UserController } from '../../controller'
import { updateToken } from '../../../utils/account'

export default {
  User: {
    // list: () => {
    //   return User.list()
    // }
    detail: async (root, { id }) => {
      return UserController.detail(id)
    }
    //   signup: async (root, params) => {
    //     const user = await User.signup(params)
    //     return user
    //   },
    //   login: async (root, params, req) => {
    //     const user = await User.login(params)
    //     if (user) {
    //       return updateToken(user, req)
    //     }
    //     return user
    //   },
    //   logout: async (root, params) => {
    //     console.log(params)
    //   }
  }
}
