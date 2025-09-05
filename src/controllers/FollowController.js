import { json } from 'zod'
import { testUserId } from '../config/userForTest.js'
import { FollowRepository } from '../repositories/FollowRepository.js'
import { UserRepository } from '../repositories/UserRepository.js'

export class FollowController {
  static async followUser (req, res) {
    const { id } = req.params

    const userExist = await UserRepository.getUserById(id)
    if (!userExist) return res.status(400).json({ message: 'User not found' })

    await FollowRepository.followUser({ from_user: testUserId, to_user: id })
    res.json({ message: 'success' })
  }

  static async getAllFollows (req, res) {
    const follows = await FollowRepository.getAllFollows()
    return res.json(follows)
  }

  static async getFollowing (req, res) {
    const { id } = req.params
    const following = await FollowRepository.getFollowing(id)
    return res.json(following)
  }

  static async getFollowers (req, res) {
    const { id } = req.params
    const followers = await FollowRepository.getFollowers(id)
    return res.json(followers)
  }
}
