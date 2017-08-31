import * as graphQLHTTP from 'koa-graphql'

import Schema from '../../graphql'

const routes = (router) => {
  router
    .all('/graphql', graphQLHTTP({
      schema: Schema,
      pretty: true,
      graphiql: true
      // rootValue: { sid: ctx.request.headers.authorization },
    })
    )
}

module.exports = routes
