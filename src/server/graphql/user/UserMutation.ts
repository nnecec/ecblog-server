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
    description: 'update User',
    args: {
      account: {
        type: GraphQLString
      },
      password: {
        type: GraphQLString
      }
    },
    resolve: async (root, params) => {
      console.log(params)
    }
  }
}

export default UserMutation
