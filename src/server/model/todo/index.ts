import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

const TodoSchema: mongoose.Schema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  completed: {
    type: Boolean,
    default: false
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  }
})

TodoSchema
  .virtual('data')
  .get(() => ({
    _id: this._id,
    title: this.title,
    completed: this.completed,
    created: this.created,
    updated: this.updated
  }))

const Todo = mongoose.model('Todo', TodoSchema)

export default Todo
