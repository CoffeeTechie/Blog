const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    id: Schema.Types.ObjectId,
    title: String,
    author: String,
    edges: Array,
    body: String,
    // comments: { body: String, date: Date.now() },
    hidden: Boolean,
  },
  { timestamps: true }
);

// Compile model from Schema
const Post = mongoose.model("posts", PostSchema);

module.exports = Post;
