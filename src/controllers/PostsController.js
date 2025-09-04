import { PostsRepository } from '../repositories/PostsRepository.js'

export default class PostsController {
  static async getPosts (req, res) {
    try {
      const posts = await PostsRepository.getPosts()
      res.json(posts)
    } catch (error) {
      return res.status(500).json({ error })
    }
  }

  static async createPosts (req, res) {
    try {
      const newPost = await PostsRepository.create(req.body)
      res.status(201).json(newPost)
    } catch (error) {
      return res.status(500).json({ error })
    }
  }
}
