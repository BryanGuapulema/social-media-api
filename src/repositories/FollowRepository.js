import mongoose from 'mongoose'
import { FollowSchema } from '../models/FollowModel.js'

const Follow = mongoose.model('Follow', FollowSchema)

export class FollowRepository {
  static async followUser (data) {
    return await Follow.create(data)
  }

  static async unfollowUser (data) {
    const { from_user, to_user } = data

    const user = await Follow.findOne({ from_user, to_user })

    return await Follow.findByIdAndDelete(user._id)
  }

  static async getAllFollows () {
    return await Follow.find()
  }

  static async getFollowing (id) {
    return await Follow.find({ from_user: id })
  }

  static async getFollowers (id) {
    return await Follow.find({ to_user: id })
  }
}
