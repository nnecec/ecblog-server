import * as passport from 'koa-passport'
import * as compose from 'koa-compose'
import User from '../model/User'
import * as jwt from 'jsonwebtoken'
import { auth as config } from './config'

// Strategies
import jwtStrategy from './strategies/jwt'
import emailStrategy from './strategies/email'
import localStrategy from './strategies/local'

passport.use('jwt', jwtStrategy)
passport.use('local', localStrategy)

passport.serializeUser((user, done) => {
  console.log('-1-1-1-1-1-1')

  done(null, user._id)
})

passport.deserializeUser((id, done) => {
  (async () => {
    try {
      console.log('111111')
      const user = await User.findById(id)
      done(null, user)
    } catch (error) {
      done(error)
    }
  })()
})

export default function auth () {
  return compose([
    passport.initialize(),
    passport.session()
  ])
}

export const authJwt = () => passport.authenticate('jwt')
export const authEmail = () => passport.authenticate('email')
export const authLocal = () => {
  return passport.authenticate('local')
}

// After autentication using one of the strategies, generate a JWT token
export function generateToken () {
  return async ctx => {
    const { user } = ctx.passport
    if (user === false) {
      ctx.status = 401
    } else {
      const _token = jwt.sign({ id: user }, config.secret)
      const token = `JWT ${_token}`

      const currentUser = await User.findOne({ _id: user })

      ctx.status = 200
      ctx.body = {
        token,
        user: currentUser
      }
    }
  }
}
