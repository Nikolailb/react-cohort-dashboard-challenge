import Avatar from "../Avatar";
import Internal from "../containers/Internal";

function Comment() {
  return (
    <Internal>
      <Avatar
        bgColor={"#64dc78"}
        initials={"NB"}
        textColor={"var(--primary)"}
      />
      <Internal className={"comment"}>
        <h4>CONTACT NAME</h4>
        COMMENT CONTENT
      </Internal>
    </Internal>
  );
}

export default Comment;
