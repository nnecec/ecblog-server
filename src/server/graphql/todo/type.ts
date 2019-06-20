import { gql } from 'apollo-server-koa'

export default gql`
  extend type Query {
    todoList(page: Int, size: Int): [Todo]!
    todoDetail(id: String): Todo
  }

  extend type Mutation {
    todoAdd(id: ID, title: String, description: String): Todo
  }

  type Todo {
    _id: ID
    title: String
    description: String
    status: Int
  }
`
