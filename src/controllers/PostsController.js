import { testUserId } from '../config/userForTest.js'
import { PostsRepository } from '../repositories/PostsRepository.js'
import { validatePost } from '../validations/PostValidation.js'
import { CommentRepository } from '../repositories/CommentRepository.js'
import { LikeRepository } from '../repositories/LikesRepository.js'

export default class PostsController {
  static async getPosts (req, res) {
    const posts = await PostsRepository.getPosts()

    const data = posts.map(post => {
      post = {
        id: post._id,
        title: post.title,
        description: post.desc,
        user: post.author.username,
        createdAt: post.createdAt
      }
      return post
    }

    )
    const resultFormated = {
      message: 'success',
      data
    }
    res.json(resultFormated)
  }

  static async createPosts (req, res) {
    const result = validatePost(req.body)

    if (!result.success) return res.status(400).json({ message: JSON.parse(result.error) })

    const { title, desc } = result.data

    const postFormatted = {
      title,
      desc,
      author: testUserId

    }

    await PostsRepository.createPost(postFormatted)
    res.status(201).json({ message: 'success' })
  }

  static async getPostById (req, res) {
    const { id } = req.params

    const post = await PostsRepository.getPostById(id)

    if (!post) return res.status(404).json({ message: 'Post not found' })

    const likes = await LikeRepository.checkLikesForPost(id)

    const postComments = await CommentRepository.getCommentsForPost(id)
    const postCommentsFormatted = postComments.map(
      comment => {
        return {
          comment: comment.comment,
          name: comment.userId.username
        }
      }
    )

    const data = {
      id: post._id,
      title: post.title,
      description: post.desc,
      user: post.author.username,
      createdAt: post.createdAt,
      likes: likes.length,
      comments: postCommentsFormatted // todo:comments implementation
    }

    const resultFormated = {
      message: 'success',
      data
    }

    return res.json(resultFormated)
  }

  static async updatePost (req, res) {
    const { id } = req.params

    const result = validatePost(req.body)
    if (!result.success) return res.status(400).json({ message: JSON.parse(result.error) })

    const { title, desc } = result.data

    const postFormatted = {
      title,
      desc,
      author: testUserId
    }

    const updatedPost = await PostsRepository.updatePost(id, postFormatted)

    if (!updatedPost) return res.status(404).json({ message: 'Post not found' })

    return res.json({ message: 'success' })
  }

  static async deletePost (req, res) {
    const { id } = req.params

    const postDeleted = await PostsRepository.deletePost(id)
    if (!postDeleted) return res.status(404).json({ message: 'Post not found' })
    return res.json({ message: 'deleted' })
  }
}
