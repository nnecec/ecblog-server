import * as passport from 'koa-passport'
import * as jwt from 'jsonwebtoken'

import User from '../model/User'
import { jwtConfig } from './config'

// Strategies
import jwtStrategy from './strategies/jwt'
import localStrategy from './strategies/local'

passport.serializeUser((user, done) => {
  done(null, {
    id: user.id,
    username: user.username
  })
})

passport.deserializeUser((user, done) => {
  done(null, user)
})

passport.use('jwt', jwtStrategy)
passport.use('local', localStrategy)

// After Authentication, generate a token
export function generateToken () {
  return async ctx => {
    console.log(ctx)
    const { user } = ctx.state

    if (user === false) {
      ctx.status = 401
    } else {
      const jwtToken = jwt.sign(
        { id: user._id },
        jwtConfig.secret,
        jwtConfig.options
      )
      const token = `JWT ${jwtToken}`

      ctx.status = 200
      ctx.body = {
        token
      }
    }
  }
}

export default passport
