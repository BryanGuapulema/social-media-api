import { LikeSchema } from '../models/LikeModel.js'
import mongoose from 'mongoose'

const Like = mongoose.model('Like', LikeSchema)

export class LikeRepository {
  static async createLike (input) {
    return await Like.create(input)
  }

  static async checkLikeByPostId (postId) {
    return await Like.findOne({ postId })
  }

  static async deleteLike (userId, postId) {
    return await Like.deleteOne({ userId, postId })
  }
}
