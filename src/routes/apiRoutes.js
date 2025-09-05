import { Router } from 'express'
import PostsController from '../controllers/PostsController.js'
import { UserController } from '../controllers/UserController.js'
export const apiRouter = Router()

apiRouter.get('/', (req, res) => {
  res.json({ message: 'working' })
})

// users
apiRouter.post('/users', UserController.createUser)
apiRouter.get('/users', UserController.getAllUsers)
apiRouter.get('/users/:id', UserController.getUserById)
apiRouter.put('/users/:id', UserController.updateUser)
apiRouter.delete('/users/:id', UserController.deleteUser)

// posts
apiRouter.get('/posts', PostsController.getPosts)
apiRouter.post('/posts', PostsController.createPosts)
apiRouter.get('/posts/:id', PostsController.getPostById)
apiRouter.put('/posts/:id', PostsController.updatePost)
apiRouter.delete('/posts/:id', PostsController.deletePost)
