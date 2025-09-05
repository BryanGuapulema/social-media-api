import mongoose from 'mongoose'
import { PostShemma } from '../models/PostModel.js'

const Post = mongoose.model('Post', PostShemma)

export class PostsRepository {
  static async getPosts () {
    return await Post.find()
  }

  static async createPost (data) {
    return await Post.create(data)
  }

  static async getPostById (id) {
    return await Post.findById(id)
  }

  static async updatePost (id, data) {
    return await Post.findByIdAndUpdate(id, data, { new: true })
  }

  static async deletePost (id) {
    return await Post.findByIdAndDelete(id)
  }
}
