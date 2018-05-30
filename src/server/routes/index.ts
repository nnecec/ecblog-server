import * as compose from 'koa-compose'
import * as Router from 'koa-router'
import * as graphQLHTTP from 'koa-graphql'
import { printSchema } from 'graphql'
import * as passport from 'koa-passport'

import Schema from '../graphql'
import { generateToken } from '../auth/passport'

export default function routes (app) {
  const router = new Router()

  router.get('/auth/login',
    passport.authenticate('local', { failureFlash: true }),
    generateToken()
  )

  router.get('/graphql/schema', (ctx, next) => {
    ctx.set('Content-Type', 'text/plain')
    ctx.body = printSchema(Schema)
  })

  router.use(passport.authenticate('jwt', { session: false }))

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
