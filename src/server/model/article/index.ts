import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

const ArticleSchema: mongoose.Schema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String
  },
  abstract: {
    type: String
  },
  viewsCount: {
    type: Number,
    default: 0
  },
  likesCount: {
    type: Number,
    default: 0
  },
  commentsCount: {
    type: Number,
    default: 0
  },
  category: {
    type: String
  },
  status: {// 0-发布 1-草稿 2-私密分享
    type: Number,
    default: 0
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  },
  published: {
    type: Date,
    default: Date.now
  }
})

ArticleSchema.methods = {

}

const article = mongoose.model('article', ArticleSchema)

export default article
