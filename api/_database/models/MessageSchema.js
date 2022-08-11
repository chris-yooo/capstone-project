import mongoose from 'mongoose';

export const MessageSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  msg: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});
