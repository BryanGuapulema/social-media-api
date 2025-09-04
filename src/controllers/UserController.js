import bcrypt from 'bcrypt'
import { UserRepository } from '../repositories/UserRepository.js'

export class UserController {
  static async createUser (req, res) {
    const { username, password } = req.body

    if (!username || !password) return res.status(400).json({ message: 'fiels are required' })

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await UserRepository.createUser({ username, password: hashedPassword })
    return res.status(201).json(newUser)
  }

  static async getAllUsers (req, res) {
    const users = await UserRepository.getAllUsers()
    res.json(users)
  }

  static async getUserById (req, res) {
    const { id } = req.params
    const user = await UserRepository.getUserById(id)

    if (!user) return res.status(404).json({ message: 'User not found' })
    return res.json(user)
  }

  static async updateUser (req, res) {
    const { id } = req.params
    const userUpdated = await UserRepository.updateUser(id, req.body)

    if (!userUpdated) return res.status(404).json({ message: 'User not found' })
    return res.json(userUpdated)
  }

  static async deleteUser (req, res) {
    const { id } = req.params
    const userToDelete = await UserRepository.deleteUser(id)

    if (!userToDelete) return res.status(404).json({ message: 'User not found' })
    return res.json(userToDelete)
  }
}
