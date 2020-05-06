import { ArticleController } from '../../controller'

export default {
  Article: {
    list: async (root, params) => {
      const articles = await ArticleController.list(params)
      return articles
    },
    detail: async (root, params, req) => {
      const article = await ArticleController.detail(params)
      return article
    },
    saveOrUpdate: async (root, params) => {}
  }
}
