import mongoose from 'mongoose'
import { UserModel } from '../models/UserModel.js'

const User = mongoose.model('User', UserModel)

export class UserRepository {
  static async createUser (data) {
    return await User.create(data)
  }

  static async getAllUsers () {
    return await User.find()
  }

  static async getUserById (id) {
    return await User.findById(id)
  }

  static async updateUser (id, data) {
    return await User.findByIdAndUpdate(id, data, {
      new: true
    })
  }

  static async deleteUser (id) {
    return await User.findByIdAndDelete(id)
  }
}
