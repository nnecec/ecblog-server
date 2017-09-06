
const config = {
  session: {
    key: process.env.SESSION_SECRET || 'kgm-secret',
    resave: true,
    saveUninitialized: false,
    maxAge: 60000
  },
  logger: {
    transports: {
      Console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true
      }
    },
    exitOnError: false
  },
  redis: {
    port: process.env.REDIS_PORT || 6379,
    host: process.env.REDIS_HOST || '127.0.0.1',
    password: process.env.REDIS_PASSWORD || '',
    db: 0,
    cookie: { maxAge: 60000 * 60 * 24 * 365 }
  }
}

export default config
