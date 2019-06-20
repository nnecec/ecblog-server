import { merge } from 'lodash'

import { Query, Resolver } from './common'
import { UserType, UserResolver } from './user'
import { TodoType, TodoResolver } from './todo'

export const typeDefs = [Query, UserType, TodoType]
export const resolvers = merge(Resolver, UserResolver, TodoResolver)
