import { testUserId } from '../config/userForTest.js'
import { LikeRepository } from '../repositories/LikesRepository.js'
import { PostsRepository } from '../repositories/PostsRepository.js'

export class LikeController {
  static async createLike (req, res) {
    const userId = testUserId
    const postId = req.params.id

    const validPost = await PostsRepository.getPostById(postId)
    if (!validPost) return res.status(404).json({ Error: 'Post not valid' })

    const likeExist = await LikeRepository.checkLikeByPostId(postId)
    if (!likeExist) {
      await LikeRepository.createLike({ userId, postId })
      return res.json({ message: 'success' })
    } else {
      return res.json({ message: 'success' }) // don't repeat the like
    }
  }

  static async deleteLike (req, res) {
    const userId = testUserId
    const postId = req.params.id

    const validPost = await PostsRepository.getPostById(postId)
    if (!validPost) return res.status(404).json({ Error: 'Post not valid' })

    const likeExist = await LikeRepository.checkLikeByPostId(postId)
    if (likeExist) {
      try {
        await LikeRepository.deleteLike(userId, postId)
        return res.json({ message: 'success' })
      } catch (error) {
        res.json(error)
      }
    }
  }
}
