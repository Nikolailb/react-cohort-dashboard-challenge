const PostsUrlBase = "https://boolean-uk-api-server.fly.dev/nikolailb/post";
const ContactsUrlBase =
  "https://boolean-uk-api-server.fly.dev/nikolailb/contact";

function getUserById(userId, setter) {
  fetch(ContactsUrlBase + `/${userId}`, {
    method: "Get",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch information about user");
      }
      return res.json();
    })
    .then((data) => {
      setter(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

function getPostComments(postId, setter) {
  fetch(PostsUrlBase + `/${postId}/comment`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch information about comments.");
      }
      return res.json();
    })
    .then((data) => {
      setter(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

function createPost(post, toCall = []) {
  fetch(PostsUrlBase, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to create post.");
      }
      return res.json();
    })
    .then((data) => {
      console.log("Successfully created post: ", data);
      toCall.forEach((func) => func());
    })
    .catch((error) => {
      console.error(error);
    });
}

export function createComment(postId, comment, toCall = []) {
  fetch(`${PostsUrlBase}/${postId}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to create comment for post.");
      }
      return res.json();
    })
    .then((data) => {
      console.log("Successfully created comment: ", data);
      toCall.forEach((func) => func());
    })
    .catch((error) => {
      console.error(error);
    });
}

function getPosts(setter) {
  fetch(PostsUrlBase)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch posts.");
      }
      return res.json();
    })
    .then((data) => {
      data.sort((a, b) => b.id - a.id);
      setter(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

export {
  PostsUrlBase,
  ContactsUrlBase,
  getUserById,
  getPostComments,
  createPost,
  getPosts,
};
