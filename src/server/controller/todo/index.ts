import { Controller, Param, Body, Get, Post, Put, Delete } from 'routing-controllers'
import Todo from '../../model/todo'
@Controller('/todo')
export default class TodoController {

  @Post('/add')
  async add (params) {
    try {
      const result = await Todo.create(params)
      return result
    } catch (err) {
      throw (err)
    }
  }

  @Post('/remove')
  async remove (params) {
    const ids = params.id

    try {
      const result = await Todo.find({ _id: { $in: ids } }).remove()
      return result
    } catch (err) {
      params.throw(err)
    }
  }

  @Get('/list')
  async list (id?) {
    const list = await Todo.find()
    return list
  }

  @Post('/update')
  async update (params) {
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
