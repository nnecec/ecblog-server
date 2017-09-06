import * as Koa from 'koa'

import middleware from './middleware'
import routes from './routes'

const app: Koa = new Koa()
app.keys = ['secret-key']

app.use(middleware(app))
app.use(routes())
app.use((ctx) => {
  ctx.status = 404
})

export default app
