import { LikeSchema } from '../models/LikeModel'
import mongoose from 'mongoose'

const Like = mongoose.model('Like', LikeSchema)

export class LikeRepository {
  static async follow (id) {

  }
}
