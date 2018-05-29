
import User from '../../model/User'
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt'
import { auth } from '../config'

const opts = {
  jwtFromRequest: ExtractJwt.fromHeader('x-Access-Token'),
  secretOrKey: auth.secret
}

export default new JWTStrategy(opts, async (jwtPayload, done) => {
  console.log('jwtPayload', jwtPayload)
  User.findOne({ id: jwtPayload.sub }, function (err, user) {
    if (err) {
      return done(err, false)
    }
    if (user) {
      return done(null, user)
    } else {
      return done(null, false)
    }
  })
})
