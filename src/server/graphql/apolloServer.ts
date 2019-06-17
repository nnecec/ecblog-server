import { ApolloServer } from 'apollo-server-koa'
import { makeExecutableSchema } from 'graphql-tools'

import { typeDefs, resolvers } from './schema'

export default function apolloServer (app) {
  // const schema = makeExecutableSchema({
  //   typeDefs,
  //   resolvers
  // })

  const server = new ApolloServer({ typeDefs, resolvers })
  server.applyMiddleware({ app })
}
