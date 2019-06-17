import { gql } from 'apollo-server-koa'

export default gql`
  type User {
    detail: String
  }
`

// type User {
//     _id: String
//     username: String
//     email: String
//     nickname: String
//     bio: String
//     avatar: String
//     github: String
//     role: Int
//     created: String
//     updated: String
//   }
