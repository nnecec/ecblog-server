import * as compose from 'koa-compose'
import * as Router from 'koa-router'

import * as graphQLHTTP from 'koa-graphql'

import Schema from '../graphql'
import { getRootValue } from '../../tools/graphql'

const router = new Router()

router.get('/', (ctx, next) => {
  ctx.body = 'home page'
})

router.all('/graphql', graphQLHTTP(async (request, response, graphQLParams) => {
  return {
    schema: Schema,
    pretty: true,
    graphiql: true,
    rootValue: await getRootValue(request)
  }
}))

const routes = () => compose([router.routes(), router.allowedMethods()])

export default routes
