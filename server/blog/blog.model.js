const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  publisher: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  likes: [{
    type: ObjectId,
    ref: 'User',
  }],
  publishedAt: {
    type: Date,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Blog', blogSchema);