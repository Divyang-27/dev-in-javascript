const posts = [{ title: "POST1" }];

function createPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ title: `POST ${posts.length + 1}` });
      updateLastUserActivityTime().then((lastActivityTime) => {
        resolve(lastActivityTime);
      });
    }, 3000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const deletedPost = posts.pop();
        resolve(deletedPost);
      } else {
        reject("ERROR: ARRAY IS EMPTY");
      }
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let now = new Date();
      let lastActivityTime =
        "Last Activity Time: " +
        now.getHours() +
        "hr" +
        " " +
        now.getMinutes() +
        "min" +
        " " +
        now.getDate() +
        "/" +
        now.getMonth() +
        "/" +
        now.getFullYear();
      console.log(lastActivityTime);
      resolve(lastActivityTime);
    }, 1000);
  });
}

function displayPostsAndLastActivity() {
  Promise.all([createPost(), updateLastUserActivityTime()])
    .then(([lastActivityTime]) => {
      console.log(lastActivityTime);
      return deletePost();
    })
    .then((deletedPost) => {
      console.log(deletedPost.title);
    })
    .catch((error) => console.error(error));
}

displayPostsAndLastActivity();
