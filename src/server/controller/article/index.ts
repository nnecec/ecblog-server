import Article from '../../model/Article'

const ArticleController = {

  list: async (params) => {
    const { page = 1, size = 10 } = params
    const _articles = await Article.find().skip((page - 1) * size).limit(size).lean()

    return _articles
  },

  detail: async (params) => {
    const { id } = params
    const _article = await Article.findOne({ _id: id })
    return _article
  }

}

export default ArticleController
