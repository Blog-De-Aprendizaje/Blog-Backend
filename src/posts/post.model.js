// post.model.js
import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  content: { 
    type: String, 
    required: true 
  },
  course: { 
    type: String, 
    required: true 
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  postPicture: {
    type: String,
    required: [true, "Post picture is required"],
  },
  comments: [{
    name: { 
      type: String, 
      required: true 
    },
    content: { 
      type: String, 
      required: true 
    },
    createdAt: { 
      type: Date, 
      default: Date.now 
    }
  }]
});

export default mongoose.model('Post', postSchema);
