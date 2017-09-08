import * as Koa from 'koa'

import middleware from './middleware'
import routes from './routes'

const app: Koa = new Koa()
app.keys = ['secret-key']

// import middleware
app.use(middleware(app))

// import routes
app.use(routes())

app.use((ctx) => {
  ctx.status = 404
})

export default app
