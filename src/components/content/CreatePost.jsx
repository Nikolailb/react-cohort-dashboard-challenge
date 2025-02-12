import Button from "../ui/Button";
import Avatar from "../Avatar";
import Box from "../containers/Box";
import Input from "../ui/Input";

function CreatePost() {
  return (
    <Box>
      <Avatar
        bgColor={"#64dc78"}
        initials={"NB"}
        textColor={"var(--primary)"}
      />
      <Input placeholder={"What's on your mind?"} />
      <Button>Post</Button>
    </Box>
  );
}

export default CreatePost;
