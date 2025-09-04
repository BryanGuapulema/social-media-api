import mongoose from 'mongoose'
import { PostShemma } from '../models/PostModel.js'

const Post = mongoose.model('Post', PostShemma)

export class PostsRepository {
  static async getPosts () {
    return await Post.find()
  }

  static async create (data) {
    return await Post.create(data)
  }
}
