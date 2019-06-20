import Todo from '../../model/Todo'

export default {
  list: async params => {
    const { page = 1, size = 5 } = params
    return await Todo.find()
      .skip((page - 1) * size)
      .limit(size)
      .lean()
  },
  detail: async id => {
    return await Todo.findById(id)
  },
  createOrUpdate: async params => {
    const { id, title, description, status } = params
    if (!id) {
      return await Todo.create(params)
    } else {
      const res = await Todo.updateOne(
        { _id: id },
        { title, description, status }
      )
    }
  },
  remove: async params => {}
}
