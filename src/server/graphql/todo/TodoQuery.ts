import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLNonNull
} from 'graphql'

import TodoType from './TodoType'
import { Todo } from '../../controller'

const TodoQuery = {
  list: {
    type: new GraphQLList(TodoType),
    descriptions: 'all Todo list',
    resolve () {
      return Todo.list()
    }
  },

  findById: {
    type: new GraphQLList(TodoType),
    descriptions: 'find by id',
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
        description: 'Todo id'
      }
    },
    resolve: async (root, { id }) => id
  }
}

export default TodoQuery
