import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} from 'graphql'

import ArticleType from './ArticleType'
import { Article } from '../../controller'
import { updateToken } from '../../../utils/account'

const ArticleMutation = {
  saveOrUpdate: {
    type: ArticleType,
    description: 'Edit article',
    args: {
      title: { type: GraphQLString },
      content: { type: GraphQLString },
      abstract: { type: GraphQLString },
      status: { type: GraphQLInt },
      category: { type: GraphQLInt }
    },
    resolve: async (root, params) => {}
  }
}

export default ArticleMutation
