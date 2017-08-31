import * as compose from 'koa-compose'
import * as convert from 'koa-convert'
import * as logger from 'koa-logger'
import * as cors from 'koa-cors'
import * as bodyParser from 'koa-bodyparser'
// import session from 'koa-generic-session'

export default function middleware () {
  return compose([
    logger(),
    convert(cors()),

    // 解析
    convert(bodyParser({
      extendTypes: {
        json: ['application/graphql']
      }
    }))
    //    convert(session()),
  ])
}
