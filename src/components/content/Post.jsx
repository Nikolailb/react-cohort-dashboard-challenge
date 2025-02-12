import Avatar from "../Avatar";
import Box from "../containers/Box";
import Comment from "./Comment";
import CreateComment from "./CreateComment";

function Post() {
  return (
    <Box className="post-container">
      <div className="post-header">
        <Avatar bgColor={"red"} initials={"RD"} />
        <div className="post-title-container">
          <h4 className="post-owner">POST OWNER NAME</h4>
          <h5 className="post-title">POST TITLE</h5>
        </div>
      </div>
      <div className="post-content">HERE GOES THE POST CONTENT</div>
      <hr />
      COMMENTS HERE
      <Comment />
      <CreateComment />
    </Box>
  );
}

export default Post;
