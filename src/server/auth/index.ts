import passport from './passport'
import * as compose from 'koa-compose'
import * as convert from 'koa-convert'
import * as flash from 'koa-flash'
// passport
export default (app) => {
  return compose([
    passport.initialize(),
    passport.session()
  ])
}
