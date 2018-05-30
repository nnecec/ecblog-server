import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLNonNull
} from 'graphql'

import ArticleType from './ArticleType'
import { Article } from '../../controller'

const ArticleQuery = {
  list: {
    type: ArticleType,
    description: 'Get article list',
    args: {
      page: { type: GraphQLInt },
      size: { type: GraphQLInt }
    },
    resolve: async (root, params) => {
      const articles = await Article.list(params)
      return articles
    }
  },
  detail: {
    type: ArticleType,
    description: 'Get article detail',
    args: {
      id: { type: GraphQLString }
    },
    resolve: async (root, params, req) => {
      const article = await Article.detail(params)
      return article
    }
  }
}

export default ArticleQuery
