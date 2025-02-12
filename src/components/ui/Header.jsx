import Avatar from "../Avatar";
import LogoIcon from "../icons/LogoIcon";
function Header() {
  return (
    <header className="header">
      <div>
        <LogoIcon />
      </div>
      <nav>
        <ul>
          <li>
            <Avatar
              bgColor={"#64dc78"}
              initials={"NB"}
              textColor={"var(--primary)"}
              to="/profile"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
