import * as mongoose from 'mongoose'
import * as bluebird from 'bluebird'
import logger from '../tools/logger'

export default function connectDatabase (uri: string) {
  return new Promise((resolve, reject) => {
    mongoose.connection
      .on('error', error => reject(error))
      .on('close', () => logger.error('Database connection closed.'))
      .once('open', () => resolve((mongoose as any).connections[0]))

    mongoose.set('useCreateIndex', true)

    mongoose.connect(uri, { useNewUrlParser: true });
    (mongoose as any).Promise = bluebird.Promise
  })
}
