import { useEffect, useState } from "react";

import Avatar from "../Avatar";
import Box from "../containers/Box";
import Comment from "./Comment";
import CreateComment from "./CreateComment";
import { getPostComments, getUserById } from "../../util/api";
import { getFullName } from "../../util/misc";

function Post({ post }) {
  const [owner, setOwner] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getUserById(post.contactId, setOwner);
  }, [post.contactId]);

  useEffect(() => {
    getPostComments(post.id, setComments);
  }, [post.id]);

  if (!owner) {
    return <div>Loading post...</div>;
  }

  return (
    <Box className="post-container">
      <div className="post-header">
        <Avatar bgColor={"red"} initials={"RD"} />
        <div className="post-title-container">
          <h4 className="post-owner">{getFullName(owner)}</h4>
          <h5 className="post-title">{post.title}</h5>
        </div>
      </div>
      <div className="post-content">{post.content}</div>
      <hr />
      {comments.map((comment, index) => {
        return <Comment key={index} comment={comment} />;
      })}
      <CreateComment />
    </Box>
  );
}

export default Post;
