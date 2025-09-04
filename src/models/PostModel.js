import mongoose from 'mongoose'

export const postShemma = new mongoose.Schema(
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
    },
    comments: [{
      type: mongoose.Schema.Types.ObjectId
    }],
    likes: {
      type: Number
    }
  },
  { timestamps: true }
)
