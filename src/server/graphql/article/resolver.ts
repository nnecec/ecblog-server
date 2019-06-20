import { Article } from '../../controller'

export default {
  Article: {
    list: async (root, params) => {
      const articles = await Article.list(params)
      return articles
    },
    detail: async (root, params, req) => {
      const article = await Article.detail(params)
      return article
    },
    saveOrUpdate: async (root, params) => {}
  }
}
