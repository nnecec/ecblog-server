import * as passport from 'passport'
import * as crypto from 'crypto'
import { Strategy as LocalStrategy } from 'passport-local'

import User from '../../model/User'

export default new LocalStrategy(async (ctx, done) => {
  try {
    if (ctx.body.username) {
      const user = await User.findOne({ username: ctx.body.username })
      if (!user) {
        done(null, false)
      }

      done(null, user)
      // TODO - check password
    } else {
      done(null, false)
    }
  } catch (error) {
    done(error)
  }
})
