import passport from './passport'
import * as compose from 'koa-compose'

// passport
export default (app) => {
  return compose([
    passport.initialize(),
    passport.session()
  ])
}
