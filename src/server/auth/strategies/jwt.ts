
import User from '../../model/User'
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt'
import { jwtConfig } from '../config'

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
  secretOrKey: jwtConfig.secret
}

export default new JWTStrategy(opts, async (jwtPayload, done) => {
  console.log('jwtPayload', jwtPayload)
  try {
    const user = await User.findOne({ _id: jwtPayload.id })

    if (user) {
      done(null, user)
    } else {
      done(null, false)
    }
  } catch (err) {
    done(err, false)
  }
})
