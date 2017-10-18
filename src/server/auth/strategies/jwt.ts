
import User from '../../model/User'
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt'
import { auth } from '../config'

const opts = {
  jwtFromRequest: ExtractJwt.fromHeader('x-Access-Token'),
  secretOrKey: auth.secret
}

export default new JWTStrategy(opts, async (jwt_payload, done) => {
  console.log(jwt_payload)
  const user = await User.findById(jwt_payload.id)
  console.log(jwt_payload, user)
  if (user) {
    done(null, user)
  } else {
    done(null, false)
  }
})
