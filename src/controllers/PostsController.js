import { PostsRepository } from '../repositories/PostsRepository.js'
import { validatePost } from '../validations/PostValidation.js'

export default class PostsController {
  static async getPosts (req, res) {
    const posts = await PostsRepository.getPosts()
    res.json(posts)
  }

  static async createPosts (req, res) {
    const result = validatePost(req.body)

    if (!result.success) return res.status(400).json({ message: JSON.parse(result.error) })

    const newPost = await PostsRepository.createPost(result.data)
    res.status(201).json(newPost)
  }

  static async getPostById (req, res) {
    const { id } = req.params

    const post = await PostsRepository.getPostById(id)

    if (!post) return res.status(404).json({ message: 'Post not found' })

    return res.json(post)
  }

  static async updatePost (req, res) {
    const { id } = req.params

    const result = validatePost(req.body)
    if (!result.success) return res.status(400).json({ message: JSON.parse(result.error) })

    const updatedPost = await PostsRepository.updatePost(id, result.data)

    if (!updatedPost) return res.status(404).json({ message: 'Post not found' })

    return res.json(updatedPost)
  }

  static async deletePost (req, res) {
    const { id } = req.params

    const postDeleted = await PostsRepository.deletePost(id)
    if (!postDeleted) return res.status(404).json({ message: 'Post not found' })
    return res.json(postDeleted)
  }
}
