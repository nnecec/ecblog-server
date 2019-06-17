import { gql } from 'apollo-server-koa'
import { merge } from 'lodash'

import { UserType, UserResolver } from './user'
import { DemoType, DemoResolver } from './demo'

const Query = gql`
  type Query {
    user: String
    demo: Demo
  }
`

const Resolver = {
  Query: {
    demo: () => ({
      name: 'nnecec',
      sex: 'male'
    })
  }
}

export const typeDefs = [Query, UserType, DemoType]
export const resolvers = merge(Resolver, UserResolver, DemoResolver)
