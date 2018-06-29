import * as passport from 'koa-passport'
import { generateToken } from '../auth/passport'
import UserController from '../controller/user'

const signup = async (ctx, next) => {
  const { username, password } = ctx.request.body

  // TODO - improve validation
  if (username && password) {
    let user = await UserController.signup({ username, password })

    if (user) {
      await next()
    } else {
      ctx.status = 400
      ctx.body = { status: 'error', message: 'username already sign up.' }
    }
  } else {
    ctx.status = 400
    ctx.body = { status: 'error', message: 'Invalid username or password.' }
  }
}
export default (router) => {
  router.get('/', (ctx, next) => {
    const home = 'home page changed'
    ctx.body = home
  })

  router.post('/auth/login',
    passport.authenticate('local', { failureFlash: true }),
    generateToken()
  )

  router.post('/auth/signup', signup, generateToken())

  router.use(passport.authenticate('jwt', { session: false }))

}
