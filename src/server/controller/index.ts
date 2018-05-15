import { createKoaServer } from 'routing-controllers'

import Todo from './todo'
import User from './user'

export default createKoaServer({
  controllers: [Todo, User]
})
