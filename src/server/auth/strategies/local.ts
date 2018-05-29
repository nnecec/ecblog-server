import { Strategy as LocalStrategy } from 'passport-local'

import User from '../../model/User'

export default new LocalStrategy(async (username, password, done) => {
  try {
    if (username && password) {
      const user = await User.findOne({ username, password })

      if (!user) {
        done(null, false, { message: 'Incorrect username.' })
      }

      done(null, user)
    } else {
      done(null, false)
    }
    // TODO: check password
  } catch (error) {
    done(error)
  }
})
