import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import { TodoMutation, TodoQuery } from './todo'

const Schema: GraphQLSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      getTodo: TodoQuery.list,
      getTodoById: TodoQuery.findById

    }
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutation',
    fields: {
      addTodo: TodoMutation.add,
      removeTodo: TodoMutation.remove,
      updateTodo: TodoMutation.update

    }
  })
})

export default Schema
