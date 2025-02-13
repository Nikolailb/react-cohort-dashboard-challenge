const PostsUrlBase = "https://boolean-uk-api-server.fly.dev/nikolailb/post";
const ContactsUrlBase =
  "https://boolean-uk-api-server.fly.dev/nikolailb/contact";

function getUserById(id, setter) {
  fetch(ContactsUrlBase + `/${id}`, {
    method: "Get",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(
          "Failed to fetch information about initial user (id = 1)."
        );
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

function getPostComments(id, setter) {
  fetch(PostsUrlBase + `/${id}/comment`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(
          "Failed to fetch information about initial user (id = 1)."
        );
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

function createPost(post, setPosts) {
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
      setPosts((posts) => [data, ...posts]);
    })
    .catch((error) => {
      console.error(error);
    });
}

export function createComment(postId, comment, setComments) {
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
      setComments((comments) => [...comments, data]);
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
