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

export { PostsUrlBase, ContactsUrlBase, getUserById, getPostComments };
