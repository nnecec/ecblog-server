
import User from '../../model/User'
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt'
import { auth } from '../config'

const opts = {
  jwtFromRequest: ExtractJwt.fromHeader('x-Access-Token'),
  secretOrKey: auth.secret
}

export default new JWTStrategy(opts, async (jwtPayload, done) => {
  console.log(jwtPayload)
  const user = await User.findById(jwtPayload.id)
  console.log(jwtPayload, user)
  if (user) {
    done(null, user)
  } else {
    done(null, false)
  }
})
