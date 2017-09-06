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

const UserQuery = {
  list: {
    type: new GraphQLList(UserType),
    descriptions: 'all User list',
    resolve () {
      return User.list()
    }
  },
  findById: {
    type: UserType,
    descriptions: 'find by id',
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
        description: 'User id'
      }
    },
    resolve: async (root, { id }) => {
      return User.detail(id)
    }
  }
}

export default UserQuery
