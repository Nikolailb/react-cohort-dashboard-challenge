import { useContext } from "react";

import Avatar from "../Avatar";
import Internal from "../containers/Internal";
import SendIcon from "../icons/SendIcon";
import Input from "../ui/Input";
import { CurrentUserContext } from "../../App";
import { getInitialsFromUser } from "../../util/misc";

function CreateComment() {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <Internal>
      <Avatar
        bgColor={currentUser.favouriteColour}
        initials={getInitialsFromUser(currentUser)}
        textColor={"var(--primary)"}
      />
      <Input placeholder={"Add a comment..."} />
      <SendIcon />
    </Internal>
  );
}

export default CreateComment;
