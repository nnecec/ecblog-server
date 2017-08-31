import * as mongoose from 'mongoose'
export default function connectDatabase (uri: string) {
  return new Promise((resolve, reject) => {
    mongoose.connection
      .on('error', error => reject(error))
      .on('close', () => console.log('Database connection closed.'))
      .once('open', () => resolve((mongoose as any).connections[0]))

    mongoose.connect(uri, { useMongoClient: true });
    (mongoose as any).Promise = global.Promise
  })
}
