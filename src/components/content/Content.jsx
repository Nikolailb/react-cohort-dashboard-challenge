import { useEffect, useState } from "react";

import CreatePost from "./CreatePost";
import Post from "./Post";
import { PostsUrlBase } from "../../util/api";

function Content() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(PostsUrlBase)
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "Failed to fetch information about initial user (id = 1)."
          );
        }
        return res.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <main className="content">
      <CreatePost />
      {posts.map((post, index) => {
        return <Post key={index} post={post} />;
      })}
    </main>
  );
}

export default Content;
