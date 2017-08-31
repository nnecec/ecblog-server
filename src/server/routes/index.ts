import * as compose from 'koa-compose'
import * as Router from 'koa-router'
import * as requireDir from 'require-dir'

const routerConfigs: Array<any> = [{ folder: 'base', prefix: '' }, { folder: 'api', prefix: '/graphql' }]

export default function route () {
  const composed = routerConfigs.reduce((prev, curr) => {
    const routes = requireDir(`./${curr.folder}`)
    const router = new Router({
      prefix: curr.prefix
    })
    Object.keys(routes).map(name => routes[name](router))

    return [router.routes(), router.allowedMethods(), ...prev]
  }, [])
  return compose(composed)
}
