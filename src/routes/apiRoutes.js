import { Router } from 'express'
import PostsController from '../controllers/PostsController.js'
export const apiRouter = Router()

apiRouter.get('/', (req, res) => {
  res.json({ message: 'working' })
})

apiRouter.get('/posts', PostsController.getPosts)
apiRouter.post('/posts', PostsController.createPosts)
