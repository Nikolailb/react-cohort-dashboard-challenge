import { Link } from "react-router-dom";

import Avatar from "../Avatar";
import LogoIcon from "../icons/LogoIcon";
function Header() {
  return (
    <header className="header">
      <div>
        <Link to="/">
          <LogoIcon />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/profile">
              <Avatar
                bgColor={"#64dc78"}
                initials={"NB"}
                textColor={"var(--primary)"}
              />{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
