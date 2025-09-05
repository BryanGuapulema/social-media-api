import mongoose from 'mongoose'
import { CommentSchema } from '../models/CommentModel.js'

const Comment = mongoose.model('Comment', CommentSchema)

export class CommentRepository {
  static async createComment (data) {
    return await Comment.create(data)
  }

  static async getAllComents () {
    return await Comment.find().populate('userId', 'username')
  }

  static async getCommentsForPost (postId) {
    return await Comment.find({ postId }).populate('userId', 'username')
  }

  static async getCommentsofUser (userId) {
    return await Comment.find({ userId }).populate('userId', 'username')
  }
}
