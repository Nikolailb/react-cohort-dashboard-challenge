import Avatar from "../Avatar";
import Internal from "../containers/Internal";
import SendIcon from "../icons/SendIcon";
import Input from "../ui/Input";

function CreateComment() {
  return (
    <Internal>
      <Avatar
        bgColor={"#64dc78"}
        initials={"NB"}
        textColor={"var(--primary)"}
      />
      <Input placeholder={"Add a comment..."} />
      <SendIcon />
    </Internal>
  );
}

export default CreateComment;
