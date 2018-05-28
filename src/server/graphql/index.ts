import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import { UserMutation, UserQuery } from './user'

const Schema: GraphQLSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      getUser: UserQuery.list,
      getUserDetail: UserQuery.findById

    }
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutation',
    fields: {
      signup: UserMutation.signup,
      login: UserMutation.login,
      logout: UserMutation.logout
    }
  })
})

export default Schema
