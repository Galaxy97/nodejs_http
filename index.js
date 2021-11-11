const fetch = require('./fetch');

const path = {
  posts: () => '/posts',
  post: (id) => `/posts/${id}`,
  comments: (userId) => `/comments?userId=${userId}`,
};

console.log('make request to /posts');

function callback3(err, response) {
  if (err) console.error(err);
  console.log('callback3 finished');
  console.log(response);
}

function callback2(err, response) {
  if (err) console.error(err);
  console.log('callback2 finished');
  console.log(response);
  fetch(path.comments(3), callback3);
}

function callback1(err, response) {
  if (err) console.error(err);
  console.log('callback1 finished');
  fetch(path.post(3), callback2);
}

fetch(path.posts(), callback1);

console.log('after /posts request');
