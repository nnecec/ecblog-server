import * as compose from 'koa-compose'
import * as convert from 'koa-convert'
import * as cors from 'koa-cors'
import * as bodyParser from 'koa-bodyparser'
import * as session from 'koa-session'
import * as passport from 'koa-passport'
import * as helmet from 'koa-helmet'
import * as RedisClient from 'koa-redis'

// import * as morgan from 'morgan'

import config from '../../config'

export default function middleware (app) {
  return compose([
    helmet(),
    convert(cors()),
    // convert(morgan('tiny')),
    // 解析
    convert(bodyParser({
      extendTypes: {
        json: ['application/graphql']
      }
    })),
    session({
      key: config.session.key,
      resave: config.session.saveUninitialized,
      saveUninitialized: config.session.saveUninitialized,
      maxAge: config.session.maxAge,
      store: RedisClient({
        host: config.redis.host,
        port: config.redis.port,
        auth_pass: config.redis.password,
        cookie: config.redis.cookie
      })
    }, app),

    // passport
    convert(passport.initialize()),
    convert(passport.session())
  ])
}
