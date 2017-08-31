import 'babel-polyfill'
import 'isomorphic-fetch'

import app from './server'
import connectDatabase from './db'
import { development, test, production } from './db/config'

const port = process.env.PORT || 4001
const databaseConfig = (process.env.NODE_ENV === 'production')
  ? production
  : development;

(async () => {
  try {
    const dataInfo: any = await connectDatabase(databaseConfig)
    console.log(`Connected to ${dataInfo.host}:${dataInfo.port}/${dataInfo.name}`)
  } catch (error) {
    console.error(`Unable to connect to database:${error}`)
  }

  await app.listen(port)
  console.log(`Server started on port ${port}`)
})()
