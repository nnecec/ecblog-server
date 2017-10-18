
import {
	authLocal,
	generateToken
} from '../../auth'

export default (router) => {
  router.post('/auth/local', authLocal(), generateToken())

  router
		.post('/auth/register')

}
