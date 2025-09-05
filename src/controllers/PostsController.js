import { testUserId } from '../config/userForTest.js'
import { PostsRepository } from '../repositories/PostsRepository.js'
import { validatePost } from '../validations/PostValidation.js'

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

    const data = {
      id: post._id,
      title: post.title,
      description: post.desc,
      user: post.author.username,
      createdAt: post.createdAt,
      likes: post.likes,
      comments: post.comments // todo:comments implementation
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
