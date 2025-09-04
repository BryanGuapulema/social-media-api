import mongoose from 'mongoose'
const MONGO_URI = process.env.MONGO_URI ?? 'mongodb://localhost:27017/social_media'

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI)
    console.log('✅ Successful database connection')
  } catch (error) {
    console.log('Error connecting to database: ', error)
    process.exit(1)
  }
}
