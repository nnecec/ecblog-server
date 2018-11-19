import './tools/polyfill'
import './tools/redis'

import app from './server'
import logger from './tools/logger'

// DB connect function
import connectDatabase from './db'

// DB config
import { development, test, production } from './db/config'

const port = process.env.PORT || 4201
const databaseConfig = (process.env.NODE_ENV === 'production')
  ? production
  : development;

(async () => {
  try {
    // connect to db
    const dataInfo: any = await connectDatabase(databaseConfig)
    logger.debug(`Connected to ${dataInfo.host}:${dataInfo.port}/${dataInfo.name}`)
  } catch (error) {
    logger.error(`Unable to connect to database:${error}`)
  }

  // start app
  await app.listen(port)
  logger.debug(`Server started on port ${port}`)
})()
