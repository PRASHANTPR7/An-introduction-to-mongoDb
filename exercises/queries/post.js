const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "author"
    },
    title: {
      type: String,
      required: true,
      unique: true
    },
    content: {
      type: String,
      required: true,
      minlength: 50,
      maxlength: 1200
    },
    contentLength: {
      type: Number,
      required: true
    },
    isFeatured: {
      type: Boolean,
      deafult: false
    },
    similarPosts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post"
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("post", postSchema);
