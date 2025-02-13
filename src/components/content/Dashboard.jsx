import { createContext, useEffect, useState } from "react";

import CreatePost from "./CreatePost";
import Post from "./Post";
import { getPosts } from "../../util/api";

const PostsContext = createContext();

export default function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    updatePosts();
  }, []);

  const updatePosts = () => {
    getPosts(setPosts);
  };

  return (
    <PostsContext.Provider value={{ posts, setPosts, updatePosts }}>
      <main className="content">
        <CreatePost />
        {posts.map((post, index) => {
          return <Post key={index} post={post} />;
        })}
      </main>
    </PostsContext.Provider>
  );
}

export { PostsContext };
