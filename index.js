const fetch = require('./fetch');

const path = {
  posts: () => '/posts',
  post: (id) => `/posts/${id}`,
  comments: (userId) => `/comments?userId=${userId}`,
};

console.log('make request to /posts');

fetch(path.posts(), (err, res) => {
  if (err) console.error(err);
  console.log('results were retrieved');

  const postId = res[6].id;
  fetch(path.post(postId), (postErr, postRes) => {
    if (postErr) console.error(postErr);
    console.log('post results were retrieved');

    const { userId } = postRes;

    fetch(path.comments(userId), (commentsErr, commentsRes) => {
      if (commentsErr) console.error(commentsErr);
      console.log('comments results were retrieved');

      console.log(commentsRes[1]);
    });
  });
});

console.log('after /posts request');
