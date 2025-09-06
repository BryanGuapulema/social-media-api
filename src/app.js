import express from 'express'
import { apiRouter } from './routes/apiRoutes.js'
import { corsMiddleware } from './middleware/corsMiddleware.js'

export const app = express()

app.use(corsMiddleware())
app.use(express.json())
app.use('/api', apiRouter)
