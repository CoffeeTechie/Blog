const Post = require("../models/blog-model");

createPost = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a post",
    });
  }

  const post = new Post(body);

  if (!post) {
    return res.status(400).json({ success: false, error: err });
  }

  post
    .save()
    .then(() => {
      return res.status(201).json({
        title: post.title,
        success: true,
        //assign id value
        id: post._id,
        message: "Post created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Post not created!",
      });
    });
};

updatePost = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Post.findOne({ _id: req.params.id }, (err, post) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Post not found!",
      });
    }
    post.title = body.title;
    post.edges = body.edges;
    post.author = body.author;
    post.body = body.body;
    post.hidden = body.hidden;
    post
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          //updates the id when post is located?
          id: post._id,
          message: "Post updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Post not updated!",
        });
      });
  });
};

deletePost = async (req, res) => {
  await Post.findOneAndDelete({ _id: req.params.id }, (err, post) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!post) {
      return res.status(404).json({ success: false, error: `Post not found` });
    }

    return res.status(200).json({ success: true, data: post });
  }).catch((err) => console.log(err));
};

getPostById = async (req, res) => {
  await Post.findOne({ _id: req.params.id }, (err, post) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!post) {
      return res.status(404).json({ success: false, error: `Post not found` });
    }
    return res.status(200).json({ success: true, data: post });
  }).catch((err) => console.log(err));
};

getPosts = async (req, res) => {
  await Post.find({}, (err, posts) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!posts.length) {
      return res.status(404).json({ success: false, error: `Post not found` });
    }

    return res.status(200).json({ success: true, data: posts });
  }).catch((err) => console.log(err));
};

module.exports = {
  createPost,
  updatePost,
  deletePost,
  getPosts,
  getPostById,
};
