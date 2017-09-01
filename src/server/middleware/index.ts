import * as compose from 'koa-compose'
import * as convert from 'koa-convert'
import * as cors from 'koa-cors'
import * as bodyParser from 'koa-bodyparser'
import * as session from 'koa-session'
import * as passport from 'koa-passport'
import * as helmet from 'koa-helmet'
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
    session(config.session, app),

    // passport
    convert(passport.initialize()),
    convert(passport.session())
  ])
}
