import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import { TodoMutation, TodoQuery } from './todo'
import { UserMutation, UserQuery } from './user'

const Schema: GraphQLSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      getTodo: TodoQuery.list,

      getUser: UserQuery.list
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutation',
    fields: {
      addTodo: TodoMutation.add,
      removeTodo: TodoMutation.remove,
      updateTodo: TodoMutation.update,

      register: UserMutation.register,
      login: UserMutation.login,
      logout: UserMutation.logout
    }
  })
})

export default Schema
