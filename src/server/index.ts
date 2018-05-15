import * as Koa from 'koa'

import middleware from './middleware'
import auth from './auth'
import routes from './routes'

const app: Koa = new Koa()
app.keys = ['secret-key']

// import middleware
app.use(middleware(app))

// import auth
app.use(auth())
// import routes
app.use(routes())

app.use((ctx) => {
  ctx.status = 404
})

export default app
