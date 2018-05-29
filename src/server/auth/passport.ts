import * as passport from 'koa-passport'
import * as jwt from 'jsonwebtoken'

import User from '../model/User'
import { auth as config } from './config'

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

// After Authentication using one of the strategies, generate a JWT token
export function generateToken () {
  return async ctx => {
    const { user } = ctx.state
    if (user === false) {
      ctx.status = 401
    } else {
      const jwtToken = jwt.sign({ id: user }, config.secret)
      const token = `JWT ${jwtToken}`

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
