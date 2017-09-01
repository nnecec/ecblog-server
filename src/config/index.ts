export default {
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
  }
}
