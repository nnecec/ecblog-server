import User from '../../model/User'
import { Strategy as LocalStrategy } from 'passport-local'

export default new LocalStrategy(async (ctx, done) => {
  console.log('LocalStrategy: ', ctx)

  try {
    // Test whether is a login using email and password
    if (ctx.body.email && ctx.body.password) {
      const user = await User.findOne({ email: ctx.body.email.toLowerCase() })

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
