import * as compose from 'koa-compose'
import * as convert from 'koa-convert'
import * as cors from 'koa-cors'
import * as bodyParser from 'koa-bodyparser'
import * as logger from 'koa-logger'
import * as session from 'koa-session'
import * as helmet from 'koa-helmet'
import * as RedisClient from 'koa-redis'

import config from '../../config'

export default function middleware (app) {
  return compose([
    // HTTP headers secure
    helmet(),
    // 跨域处理
    convert(cors()),
    // 打印日志
    logger(),
    // 解析
    bodyParser(),
    session({
      key: config.session.key,
      resave: config.session.resave,
      saveUninitialized: config.session.saveUninitialized,
      maxAge: config.session.maxAge,
      store: RedisClient({
        host: config.redis.host,
        port: config.redis.port,
        auth_pass: config.redis.password,
        cookie: config.redis.cookie
      })
    }, app)
  ])
}
