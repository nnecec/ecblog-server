import * as koaSession from 'koa-session'
import * as RedisClient from 'koa-redis'
import config from '../../config'

export default function session (app) {
  return koaSession(
    {
      key: config.session.key,
      overwrite: config.session.overwrite,
      maxAge: config.session.maxAge,
      signed: config.session.signed,
      store: RedisClient({
        host: config.redis.host,
        port: config.redis.port,
        auth_pass: config.redis.password,
        cookie: config.redis.cookie
      })
    },
    app
  )
}
