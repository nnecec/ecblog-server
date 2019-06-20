import { gql } from 'apollo-server-koa'

export const Query = gql`
  type Query {
    hello: String
  }
  type Mutation {
    sayHello(word: String): String
  }
`

export const Resolver = {
  Query: {
    hello: () => 'hello world!'
  },
  Mutation: {
    sayHello: (parent, args, context, info) => {
      console.log(parent, args, context, info)
      return `hello ${args.word}!`
    }
  }
}
