import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import { UserMutation, UserQuery } from './user'
import { ArticleMutation, ArticleQuery } from './article'

const Schema: GraphQLSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      getUser: UserQuery.list,
      getUserDetail: UserQuery.findById,

      // article
      getArticleList: ArticleQuery.list,
      getArticleDetail: ArticleQuery.detail
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutation',
    fields: {
      signup: UserMutation.signup,
      login: UserMutation.login,
      logout: UserMutation.logout,

      // article
      editArticle: ArticleMutation.saveOrUpdate

    }
  })
})

export default Schema
