const PostsUrlBase = "https://boolean-uk-api-server.fly.dev/nikolailb/post";
const ContactsUrlBase =
  "https://boolean-uk-api-server.fly.dev/nikolailb/contact";

function getUserById(userId, setter, callbacks = []) {
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
      callbacks.forEach((callback) => callback());
    })
    .catch((error) => {
      console.error(error);
    });
}

export { PostsUrlBase, ContactsUrlBase, getUserById };
