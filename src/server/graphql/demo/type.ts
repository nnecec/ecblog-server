import { gql } from 'apollo-server-koa'

export default gql`
  type Demo {
    sex: String
    name: String
  }
`
