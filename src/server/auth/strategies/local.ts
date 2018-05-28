import * as passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'

import User from '../../model/User'

export default new LocalStrategy(async (username, password, done) => {
  try {
    console.log(11111111)

    const user = await User.findOne({ username })
    if (!user) {
      done(null, false)
    }

    done(null, user)
    // TODO: check password
  } catch (error) {
    done(error)
  }
})
