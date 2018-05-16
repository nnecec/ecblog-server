import {
	GraphQLObjectType,
	GraphQLList,
	GraphQLBoolean,
	GraphQLString,
	GraphQLInt,
	GraphQLID
} from 'graphql'

const UserType: GraphQLObjectType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    _id: {
      type: GraphQLID,
      description: 'User id'
    },
    username: {
      type: GraphQLString,
      description: 'User username'
    },
    email: {
      type: GraphQLString,
      description: 'User email'
    },
    nickname: {
      type: GraphQLString,
      description: 'User nickname'
    },
    bio: {
      type: GraphQLString,
      description: 'User bio'
    },
    avatar: {
      type: GraphQLString,
      description: 'User avatar'
    },
    github: {
      type: GraphQLString,
      description: 'User github'
    },
    role: {
      type: GraphQLInt,
      description: 'User role. Used to control permission.'
    },
    created: {
      type: GraphQLString,
      description: 'User created time.'
    },
    updated: {
      type: GraphQLString,
      description: 'User updated time.'
    }
  })
})

export default UserType
