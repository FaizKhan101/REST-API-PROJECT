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
  console.log(title, content);
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
