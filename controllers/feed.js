const { validationResult } = require("express-validator")

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "First Post",
        content: "This is my first post",
        imageUrl: "images/1.jpg",
        creator: {
          name: "Faiz Khan",
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;

  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(422).json({ message: "Validation failed, entered data is incorrect.", errors: errors.array() })
  }

  res.json({
    message: "Post Created Succefully!",
    post: {
      _id: new Date().toISOString(),
      title: title,
      content: content,
      creator: {
        name: "Prince Khan"
      },
      createdAt: new Date()
    },
  });
};
