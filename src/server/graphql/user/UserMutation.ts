import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLNonNull
} from 'graphql'

import UserType from './UserType'
import { User } from '../../controller'

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
    }
  },
  login: {
    type: UserType,
    description: 'login User',
    args: {
      account: { type: GraphQLString },
      password: { type: GraphQLString }
    },
    resolve: async (root, params) => {
      console.log(params)
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
