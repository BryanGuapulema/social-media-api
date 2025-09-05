import mongoose from 'mongoose'

export const FollowSchema = new mongoose.Schema({
  from_user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  to_user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
},
{ timestamps: false })
