
const base = (router) => {
  router.get('/', (ctx, next) => {
    console.log('root page')
  })
}

module.exports = base
