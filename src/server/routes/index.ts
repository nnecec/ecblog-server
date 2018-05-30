import * as compose from 'koa-compose'
import * as Router from 'koa-router'
import * as graphQLHTTP from 'koa-graphql'
import { printSchema } from 'graphql'

import Schema from '../graphql'
import auth from './auth'

export default function routes (app) {
  const router = new Router()

  // auth routes
  auth(router)

  router.get('/graphql/schema', (ctx, next) => {
    ctx.set('Content-Type', 'text/plain')
    ctx.body = printSchema(Schema)
  })

  router.all('/graphql',
    graphQLHTTP(async (req, res, graphQLParams) => ({
      schema: Schema,
      pretty: true,
      graphiql: true
      // rootValue: await getRootValue(req)
    }))
  )

  return compose([
    router.routes(),
    router.allowedMethods()
  ])
}
