import { Link } from "react-router-dom";
import HomeIcon from "../icons/HomeIcon";
import ProfileIcon from "../icons/ProfileIcon";

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li className="sidebar-button active container">
          <Link className="container" to="/">
            <HomeIcon label="Home" active={true} />
          </Link>
        </li>
        <li className="sidebar-button container">
          <Link className="container" to="/profile">
            <ProfileIcon label="Profile" active={false} />
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
