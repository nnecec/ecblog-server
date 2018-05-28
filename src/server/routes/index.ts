import * as compose from 'koa-compose'
import * as Router from 'koa-router'
import * as graphQLHTTP from 'koa-graphql'
import { printSchema } from 'graphql'
import * as passport from 'koa-passport'

import Schema from '../graphql'

export default function routes (app) {
  const router = new Router()

  router.all('/graphql', graphQLHTTP(async (req, res, graphQLParams) => ({
    schema: Schema,
    pretty: true,
    graphiql: true
    // rootValue: await getRootValue(req)
  })))

  return compose([
    router.routes(),
    router.allowedMethods()
  ])
}
