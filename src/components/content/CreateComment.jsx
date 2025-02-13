import { useContext, useState } from "react";

import Avatar from "../Avatar";
import Internal from "../containers/Internal";
import SendIcon from "../icons/SendIcon";
import Input from "../ui/Input";
import { CurrentUserContext } from "../../App";
import { getInitialsFromUser } from "../../util/misc";
import { createComment } from "../../util/api";

function CreateComment({ post, setComments }) {
  const { currentUser } = useContext(CurrentUserContext);
  const [content, setContent] = useState("");
  const handleChange = (event) => {
    event.preventDefault();
    setContent(event.target.value);
  };

  const handleSend = () => {
    let comment = {
      postId: post.id,
      content: content,
      contactId: currentUser.id,
    };
    createComment(post.id, comment, setComments);
    setContent("");
  };

  return (
    <Internal>
      <Avatar
        bgColor={currentUser.favouriteColour}
        initials={getInitialsFromUser(currentUser)}
        textColor={"var(--primary)"}
      />
      <Input
        placeholder={"Add a comment..."}
        onChange={handleChange}
        value={content}
      />
      <SendIcon onClick={handleSend} />
    </Internal>
  );
}

export default CreateComment;
