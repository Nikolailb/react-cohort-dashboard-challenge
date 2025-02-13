import { useContext, useState } from "react";

import Button from "../ui/Button";
import Avatar from "../Avatar";
import Box from "../containers/Box";
import Input from "../ui/Input";
import { CurrentUserContext } from "../../App";
import { PostsContext } from "./Dashboard";
import { getInitialsFromUser } from "../../util/misc";
import { createPost } from "../../util/api";

function CreatePost() {
  const { currentUser } = useContext(CurrentUserContext);
  const { setPosts } = useContext(PostsContext);
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let post = {
      title: "",
      contactId: currentUser.id,
      content: content,
    };
    createPost(post, setPosts);
    setContent("");
  };

  return (
    <Box>
      <Avatar
        bgColor={currentUser.favouriteColour}
        initials={getInitialsFromUser(currentUser)}
        textColor={"var(--primary)"}
      />
      <Input
        placeholder={"What's on your mind?"}
        onChange={handleChange}
        value={content}
      />
      <Button onClick={handleSubmit}>Post</Button>
    </Box>
  );
}

export default CreatePost;
