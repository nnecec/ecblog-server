import * as Koa from 'koa'
import * as passport from 'koa-passport'

import middleware from './middleware'
import auth from './auth'
import routes from './routes'
import apolloServer from './graphql/apolloServer'

const app: Koa = new Koa()
app.keys = ['secret-key']

// import middleware
app.use(middleware(app))

// import auth
app.use(auth(app))
// import routes
// app.use(routes(app))

apolloServer(app)

app.use(ctx => {
  ctx.status = 404
})

export default app
