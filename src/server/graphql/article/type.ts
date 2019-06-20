import { gql } from 'apollo-server-koa'

export default gql`
  type Article {
    _id: String
    title: String
    abstract: String
    viewsCount: Int
    likesCount: Int
    commentsCount: Int
    category: Int
    status: Int
    created: String
    updated: String
    published: String
  }
`
