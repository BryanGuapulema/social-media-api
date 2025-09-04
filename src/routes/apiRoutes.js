import { Router } from 'express'

export const apiRouter = Router()

apiRouter.get('/', (req, res) => {
  res.json({ message: 'working' })
})

apiRouter.get('/posts', (req, res) => {
  res.json({ message: 'todo' })
})
