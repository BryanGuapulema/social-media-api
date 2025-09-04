import mongoose from 'mongoose'

export const UserModel = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
      min: 8
    }
  },
  { timestamps: true }
)
