import { useContext } from "react";

import Button from "../ui/Button";
import Avatar from "../Avatar";
import Box from "../containers/Box";
import Input from "../ui/Input";
import { CurrentUserContext } from "../../App";
import { getInitialsFromUser } from "../../util/misc";

function CreatePost() {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <Box>
      <Avatar
        bgColor={currentUser.favouriteColour}
        initials={getInitialsFromUser(currentUser)}
        textColor={"var(--primary)"}
      />
      <Input placeholder={"What's on your mind?"} />
      <Button>Post</Button>
    </Box>
  );
}

export default CreatePost;
