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
passport.use('email', emailStrategy)
passport.use('local', localStrategy)

passport.serializeUser((user, done) => {
  done(null, {
    id: user.id,
    username: user.username
  })
})

passport.deserializeUser((user, done) => {
  done(null, user)
})

// After Authentication using one of the strategies, generate a JWT token
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

export default passport
