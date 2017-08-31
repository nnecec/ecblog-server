import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
  GraphQLID
} from 'graphql'

const TodoType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Todo',
  fields: () => ({
    _id: {
      type: GraphQLID,
      description: 'Todo id'
    },
    title: {
      type: GraphQLString,
      description: 'Todo title'
    },
    description: {
      type: GraphQLString,
      description: 'Todo description'
    },
    completed: {
      type: GraphQLBoolean,
      description: 'Todo is completed'
    }
  })
})

export default TodoType
