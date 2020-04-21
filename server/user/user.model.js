const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  lastLoginTime: {
    type: Date,
    default: Date.now()
  },
  blogs: [{
    type: ObjectId,
    ref: 'Blog'
  }],
  likeBlogs: [{
    type: ObjectId,
    ref: 'Blog'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);