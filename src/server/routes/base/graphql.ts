import * as graphQLHTTP from 'koa-graphql'

import Schema from '../../graphql'
import { getRootValue } from '../../../tools/graphql'

const routes = (router) => {
  router
    .all('/graphql', graphQLHTTP(async (request, response, graphQLParams) => ({
      schema: Schema,
      pretty: true,
      graphiql: true,
      rootValue: await getRootValue(request)
    }))
    )
}

export default routes
