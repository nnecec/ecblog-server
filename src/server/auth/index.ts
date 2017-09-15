import * as passport from 'koa-passport'
import * as compose from 'koa-compose'
import User from '../model/User'
import * as jwt from 'jsonwebtoken'
import { auth as config } from './config'

// Strategies
import jwtStrategy from './strategies/jwt'

passport.use('jwt', jwtStrategy)

passport.serializeUser((user, done) => done(null, user._id))

passport.deserializeUser((id, done) => {
  (async () => {
    try {
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

export function isAuthenticated () {
  return passport.authenticate('jwt')
}

export function authEmail () {
  return passport.authenticate('email')
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

      const currentUser = await User.findOne({_id: user})

      ctx.status = 200
      ctx.body = {
        token,
        user: currentUser
      }
    }
  }
}

// Web Facebook Authentication
export function isFacebookAuthenticated () {
  return passport.authenticate('facebook', {
    scope: ['email']
  })
}

export function isFacebookAuthenticatedCallback () {
  return passport.authenticate('facebook', {
    failureRedirect: '/login'
  })
}
