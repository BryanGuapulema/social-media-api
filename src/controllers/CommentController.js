import { testUserId } from '../config/userForTest.js'
import { CommentRepository } from '../repositories/CommentRepository.js'
import { PostsRepository } from '../repositories/PostsRepository.js'
import { UserRepository } from '../repositories/UserRepository.js'
import { validateComment } from '../validations/CommentValidation.js'

export class CommentController {
  static async createComment (req, res) {
    const postId = req.params.id
    const result = validateComment(req.body)

    const postExist = await PostsRepository.getPostById(postId)
    if (!postExist) return res.status(404).json({ message: 'Post not found' })

    if (!result.success) return res.status(400).json({ error: JSON.parse(result.error) })

    const { comment } = result.data

    const newComment = await CommentRepository.createComment({ comment, userId: testUserId, postId })

    if (newComment) return res.json({ message: 'success' })
  }

  static async getAllComents (req, res) {
    const comments = await CommentRepository.getAllComents()

    res.json(comments)
  }

  static async getCommentsForPost (req, res) {
    const postId = req.params.id

    const postExist = await PostsRepository.getPostById(postId)
    if (!postExist) return res.status(404).json({ message: 'Post not found' })

    const comments = await CommentRepository.getCommentsForPost(postId)
    res.json(comments)
  }

  static async getCommentsofUser (req, res) {
    const userId = req.params.id

    const userExist = await UserRepository.getUserById(userId)
    if (!userExist) return res.status(404).json({ message: 'Post not found' })

    const comments = await CommentRepository.getCommentsofUser(userId)
    res.json(comments)
  }
}
