import { useEffect, useState } from "react";

import Avatar from "../Avatar";
import Box from "../containers/Box";
import Comment from "./Comment";
import CreateComment from "./CreateComment";
import { getPostComments, getUserById, PostsUrlBase } from "../../util/api";
import { getFullName, getInitialsFromUser } from "../../util/misc";
import { useNavigate, useParams } from "react-router-dom";

function Post({ foundPost }) {
  const [owner, setOwner] = useState(null);
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState(foundPost);
  const navigate = useNavigate();
  const { id } = useParams();

  if (post == null) {
    fetch(`${PostsUrlBase}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      });
  }

  useEffect(() => {
    if (!post) {
      return;
    }
    getUserById(post.contactId, setOwner);
    getPostComments(post.id, setComments);
  }, [post]);

  if (!post || !owner) {
    return <div>Loading post...</div>;
  }

  return (
    <Box className="post-container">
      <div className="post-header">
        <Avatar
          bgColor={owner.favouriteColour}
          initials={getInitialsFromUser(owner)}
        />
        <div
          className="post-title-container"
          onClick={() => navigate(`/posts/${post.id}`)}
        >
          <h4 className="post-owner">{getFullName(owner)}</h4>
          <h5 className="post-title">{post.title}</h5>
        </div>
      </div>
      <div className="post-content">{post.content}</div>
      <hr />
      {comments.map((comment, index) => {
        return <Comment key={index} comment={comment} />;
      })}
      <CreateComment
        post={post}
        updateComments={() => getPostComments(post.id, setComments)}
      />
    </Box>
  );
}

export default Post;
