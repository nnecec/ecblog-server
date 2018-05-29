import { Strategy as LocalStrategy } from 'passport-local'
import * as crypto from 'crypto'

import User from '../../model/User'

export default new LocalStrategy(async (username, password, done) => {
  try {
    if (username && password) {
      const user: any = await User.findOne({ username })
      console.log(user)

      if (!user) {
        done(null, false, { message: 'Incorrect username.' })
      } else {
        const salt = new Buffer(user.salt, 'base64')

        if (user.hashedPassword === crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha1').toString('base64')) {
          done(null, user)
        }
      }

    } else {
      done(null, false)
    }
    // TODO: check password
  } catch (error) {
    done(error)
  }
})
