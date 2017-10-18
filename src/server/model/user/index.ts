import * as mongoose from 'mongoose'
import * as crypto from 'crypto'
import * as bcrypt from 'bcrypt'

const Schema = mongoose.Schema

const UserSchema: mongoose.Schema = new Schema({
  account: {
    type: String,
    required: true,
    unique: true
  },
  hashedPassword: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  nickname: {
    type: String,
    unique: true
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
  token: {
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

UserSchema
  .virtual('password')
  .set(function (password) {
    this._password = password
    this.salt = this.makeSalt()
    this.hashedPassword = this.encryptPassword(password)
  })
  .get(() => {
    return this._password
  })

UserSchema.methods = {
  makeSalt: function () {
    return crypto.randomBytes(16).toString('base64')
  },
  // generate hashed password
  encryptPassword: function (password) {
    if (!password || !this.salt) return ''
    const salt = new Buffer(this.salt, 'base64')
    return crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha1').toString('base64')
  }
}

const user = mongoose.model('user', UserSchema)

export default user
