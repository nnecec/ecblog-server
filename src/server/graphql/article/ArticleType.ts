import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
  GraphQLID
} from 'graphql'

const ArticleType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Article',
  fields: () => ({
    _id: {
      type: GraphQLID,
      description: 'Article id'
    },
    title: {
      type: GraphQLString,
      description: 'Article title'
    },
    abstract: {
      type: GraphQLString,
      description: 'Article abstract'
    },
    viewsCount: {
      type: GraphQLInt,
      description: 'Article views count'
    },
    likesCount: {
      type: GraphQLInt,
      description: 'Article likes count'
    },
    commentsCount: {
      type: GraphQLInt,
      description: 'Article comments count'
    },
    category: {
      type: GraphQLString,
      description: 'Article category'
    },
    status: {
      type: GraphQLInt,
      description: 'Article status.'
    },
    created: {
      type: GraphQLString,
      description: 'Article created time.'
    },
    updated: {
      type: GraphQLString,
      description: 'Article updated time.'
    },
    published: {
      type: GraphQLString,
      description: 'Article published time.'
    }
  })
})

export default ArticleType
