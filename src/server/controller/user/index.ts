import { Controller, Param, Body, Get, Post, Put, Delete } from 'routing-controllers'
import User from '../../model/User'

@Controller('/user')
export default class UserController {

  @Post('/signup')
  async signup (params) {
    const { account, password } = params
    const user = await User.findOne({ account })
    if (user) {
      throw Error('This account is existed.')
    }
    const newUser = await User.create(params)
    return newUser
  }
  @Post('/login')
  async login (params) {
    const { account, password } = params
    const user: any = await User.findOne({ account })
    if (user) {
      if (user.encryptPassword(password) === user.hashedPassword) {
        return user
      }
      throw Error('Your password is wrong.')
    }
    throw Error('This account is not existed.')
  }
  @Post('/logout')
  async logout (params) {

  }
  @Post('/update')
  async update (params) {

  }
  @Post('/list')
  async list () {

  }
  @Post('/detail')
  async detail (params) {

  }
  @Post('/token')
  async getUserByToken (token) {
    const user = await User.findOne({ token })
    return user
  }
}
