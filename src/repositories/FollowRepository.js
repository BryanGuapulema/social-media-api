import mongoose from 'mongoose'
import { FollowSchema } from '../models/FollowModel.js'

const Follow = mongoose.model('Follow', FollowSchema)

export class FollowRepository {
  static async followUser (data) {
    return await Follow.create(data)
  }
}
