import * as Redis from 'ioredis'
import config from '../config'
import logger from './logger'

// connect to redis client
const redisClient = new Redis(config.redis)

redisClient.on('connect', function (msg) {
  logger.debug('redis connect', msg)
})
redisClient.on('error', function (err) {
  logger.error('redis error', err)
})

export default redisClient
