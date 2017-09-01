import * as winston from 'winston'
import * as convert from 'koa-convert'

import config from './config'
import { forEach, isFunction } from 'lodash'

function buildLoggerConfig (config) {
  const loggerConfig = Object.assign({}, config)
  loggerConfig.transports = []
  forEach(config.transports, (transport, key) => {
    if (isFunction(winston.transports[key])) {
      loggerConfig.transports.push(new winston.transports[key](transport))
    }
  })
  return loggerConfig
}

export default new winston.Logger(buildLoggerConfig(config.logger))
