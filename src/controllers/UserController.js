import bcrypt from 'bcrypt'
import { UserRepository } from '../repositories/UserRepository.js'
import { validatePartialUser, validateUser } from '../validations/UserValidation.js'

export class UserController {
  static async createUser (req, res) {
    const result = validateUser(req.body)

    // if (!result.success) return res.status(400).json({ message: result.error.map(e => e.message) })
    if (!result.success) return res.status(400).json({ message: JSON.parse(result.error) })

    const { username, password } = result.data
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

    const result = validatePartialUser(req.body)

    // if (!result.success) return res.status(400).json({ message: result.error.map(e => e.message) })
    if (!result.success) return res.status(400).json({ message: JSON.parse(result.error) })

    const { username, password } = result.data
    const user = await UserRepository.getUserById(id)
    if (!user) return res.status(404).json({ message: 'User not found' })

    const oldPassword = user.password
    const isSamePass = await bcrypt.compare(password, oldPassword)

    let userUpdated = null
    if (!isSamePass) {
      const hashedPassword = await bcrypt.hash(password, 10)
      userUpdated = await UserRepository.updateUser(id, { username, password: hashedPassword })
    } else {
      userUpdated = await UserRepository.updateUser(id, { username })
    }

    return res.json(userUpdated)
  }

  static async deleteUser (req, res) {
    const { id } = req.params
    const userToDelete = await UserRepository.deleteUser(id)

    if (!userToDelete) return res.status(404).json({ message: 'User not found' })
    return res.json(userToDelete)
  }
}
