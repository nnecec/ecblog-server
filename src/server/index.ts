import * as Koa from 'koa'
import 'reflect-metadata'

import middleware from './middleware'
import auth from './auth'
import routes from './routes'
import KoaServer from './controller'

const app = KoaServer

app.keys = ['secret-key']

// import middleware
app.use(middleware(app))

// import auth
app.use(auth())

app.use((ctx) => {
  ctx.status = 404
})

export default app
