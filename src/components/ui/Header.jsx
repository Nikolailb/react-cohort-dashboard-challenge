import { useContext } from "react";

import Avatar from "../Avatar";
import LogoIcon from "../icons/LogoIcon";

import { CurrentUserContext } from "../../App";
import { getInitialsFromUser } from "../../util/misc";

function Header() {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <header className="header">
      <div>
        <LogoIcon />
      </div>
      <nav>
        <ul>
          <li>
            <Avatar
              bgColor={currentUser.favouriteColour}
              initials={getInitialsFromUser(currentUser)}
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
