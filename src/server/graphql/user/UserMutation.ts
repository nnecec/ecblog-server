import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} from 'graphql'

import UserType from './UserType'
import { User } from '../../controller'
import { updateToken } from '../../../tools/account'

const UserMutation = {
  register: {
    type: UserType,
    description: 'register User',
    args: {
      account: { type: GraphQLString },
      password: { type: GraphQLString }
    },
    resolve: async (root, params) => {
      const user = await User.register(params)
      return user
    }
  },
  login: {
    type: UserType,
    description: 'login User',
    args: {
      account: { type: GraphQLString },
      password: { type: GraphQLString }
    },
    resolve: async (root, params, req) => {
      console.log('login', root)
      const user = await User.login(params)
      if (user) {
        return updateToken(user, req)
      }
      return user
      // return await generateToken(user, req)

    }
  },
  logout: {
    type: UserType,
    description: 'logout User',
    resolve: async (root, params) => {
      console.log(params)
    }
  }

}

export default UserMutation
