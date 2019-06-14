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
import { updateToken } from '../../../utils/account'

const UserMutation = {
  signup: {
    type: UserType,
    description: 'signup',
    args: {
      username: { type: GraphQLString },
      password: { type: GraphQLString }
    },
    resolve: async (root, params) => {
      const user = await User.signup(params)
      return user
    }
  },
  login: {
    type: UserType,
    description: 'login',
    args: {
      username: { type: GraphQLString },
      password: { type: GraphQLString }
    },
    resolve: async (root, params, req) => {
      const user = await User.login(params)
      if (user) {
        return updateToken(user, req)
      }
      return user
    }
  },
  logout: {
    type: UserType,
    description: 'logout',
    resolve: async (root, params) => {
      console.log(params)
    }
  }
}

export default UserMutation
