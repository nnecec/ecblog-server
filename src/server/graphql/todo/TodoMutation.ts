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

const TodoMutation = {
  add: {
    type: TodoType,
    description: 'add Todo',
    args: {
      title: {
        type: GraphQLString
      },
      description: {
        type: GraphQLString
      },
      completed: {
        type: GraphQLBoolean
      }
    },
    resolve: async (root, params) => {
      const result = await Todo.add(params)
      return result
    }
  },

  remove: {
    type: new GraphQLList(TodoType),
    description: 'remove Todo',
    args: {
      id: {
        type: new GraphQLList(GraphQLID)
      }
    },
    resolve: async (root, params) => {
      const result = await Todo.remove(params)
      return result
    }
  },

  update: {
    type: TodoType,
    description: 'update Todo',
    args: {
      id: {
        type: GraphQLID
      },
      title: {
        type: GraphQLString
      },
      description: {
        type: GraphQLString
      },
      completed: {
        type: GraphQLBoolean
      }
    },
    resolve: async (root, params) => {
      const result = await Todo.update(params)
      return result
    }
  }
}

export default TodoMutation
