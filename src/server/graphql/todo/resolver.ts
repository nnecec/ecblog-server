import { TodoController } from '../../controller'

export default {
  Query: {
    todoList: (_, args) => {
      return TodoController.list(args)
    },
    todoDetail: (_, args) => {
      return TodoController.detail(args.id)
    }
  },
  Mutation: {
    todoAdd: (_, args) => {
      console.log(args)
      return TodoController.createOrUpdate(args)
    }
  }
}
