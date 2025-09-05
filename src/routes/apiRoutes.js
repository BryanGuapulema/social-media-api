import { Router } from 'express'
import PostsController from '../controllers/PostsController.js'
import { UserController } from '../controllers/UserController.js'
import { LikeController } from '../controllers/LikesController.js'
import { FollowController } from '../controllers/FollowController.js'
import { CommentController } from '../controllers/CommentController.js'
export const apiRouter = Router()

apiRouter.get('/', (req, res) => {
  res.json({ message: 'working' })
})

// ROUTES REQUIRED
apiRouter.get('/posts', PostsController.getPosts)
apiRouter.get('/posts/:id', PostsController.getPostById)
apiRouter.post('/posts', PostsController.createPosts)
apiRouter.put('/posts/:id', PostsController.updatePost)
apiRouter.delete('/posts/:id', PostsController.deletePost)
apiRouter.post('/follow/:id', FollowController.followUser)
apiRouter.post('/unfollow/:id', FollowController.unfollowUser)
apiRouter.get('/user/:id', UserController.getUserById)
apiRouter.post('/like/:id', LikeController.createLike)
apiRouter.post('/unlike/:id', LikeController.deleteLike)
apiRouter.post('/comment/:id', CommentController.createComment)

// // users
apiRouter.post('/user', UserController.createUser)
apiRouter.get('/user', UserController.getAllUsers)
// apiRouter.get('/user/:id', UserController.getUserById)
// apiRouter.put('/user/:id', UserController.updateUser)
// apiRouter.delete('/user/:id', UserController.deleteUser)

// // posts
// apiRouter.get('/posts', PostsController.getPosts)
// apiRouter.post('/posts', PostsController.createPosts)
// apiRouter.get('/posts/:id', PostsController.getPostById)
// apiRouter.put('/posts/:id', PostsController.updatePost)
// apiRouter.delete('/posts/:id', PostsController.deletePost)

// likes
apiRouter.get('/posts/like/:id', LikeController.checkLikesForPost)

// follows
// apiRouter.get('/follow', FollowController.getAllFollows)
// apiRouter.get('/user/follows/:id', FollowController.getFollowing)
// apiRouter.get('/user/followers/:id', FollowController.getFollowers)

// comments
apiRouter.get('/comment', CommentController.getAllComents)
apiRouter.get('/comment/user/:id', CommentController.getCommentsofUser)
apiRouter.get('/comment/post/:id', CommentController.getCommentsForPost)
