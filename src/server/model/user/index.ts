import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema: mongoose.Schema = new Schema({
  account: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  nickname: {
    type: String
  },
  bio: {
    type: String
  },
  avatar: {
    type: String
  },
  github: {
    id: String,
    token: String,
    email: String,
    name: String
  },
  access_token: {
    type: String
  },
  role: {
    type: Number,
    default: 0
  },
  salt: {
    type: String
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

UserSchema
  .virtual('data')
  .get(() => ({
    _id: this._id,
    account: this.account,
    email: this.email,
    nickname: this.nickname,
    bio: this.bio,
    avatar: this.avatar,
    github: this.github,
    created: this.created,
    updated: this.updated
  }))

const user = mongoose.model('user', UserSchema)

export default user
