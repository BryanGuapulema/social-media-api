import mongoose from 'mongoose'

export const PostShemma = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
    // comments: [{
    //   type: mongoose.Schema.Types.ObjectId
    // }],
    // likes: {
    //   type: Number,
    //   default: 0
    // }
  },
  { timestamps: true }
)
