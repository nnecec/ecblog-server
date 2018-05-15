import Todo from '../../model/todo'

const TodoController = {

  add: async (params) => {
    try {
      const result = await Todo.create(params)
      return result
    } catch (err) {
      throw (err)
    }
  },
  remove: async (params) => {
    const ids = params.id

    try {
      const result = await Todo.find({ _id: { $in: ids } }).remove()
      return result
    } catch (err) {
      params.throw(err)
    }
  },
  list: async (id?) => {
    const list = await Todo.find()
    return list
  },
  update: async (params) => {
    const { id, title, description, completed } = params
    try {
      const result = await Todo.findByIdAndUpdate(id, {
        title,
        description,
        completed
      })
      return result
    } catch (err) {
      throw (err)
    }
  }
}

export default TodoController
