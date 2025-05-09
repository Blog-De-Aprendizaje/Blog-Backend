import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  course: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  comments: [commentSchema]
});

export default mongoose.model('Post', postSchema);
