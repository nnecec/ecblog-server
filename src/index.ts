import './tools/polyfill'

import app from './server'
import connectDatabase from './db'
import { development, test, production } from './db/config'
import logger from './logger'

import './tools/redis'

const port = process.env.PORT || 4001
const databaseConfig = (process.env.NODE_ENV === 'production')
  ? production
  : development;

(async () => {
  try {
    const dataInfo: any = await connectDatabase(databaseConfig)
    logger.debug(`Connected to ${dataInfo.host}:${dataInfo.port}/${dataInfo.name}`)
  } catch (error) {
    logger.error(`Unable to connect to database:${error}`)
  }

  await app.listen(port)
  logger.debug(`Server started on port ${port}`)
})()
