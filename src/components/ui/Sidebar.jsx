import HomeIcon from "../icons/HomeIcon";
import ProfileIcon from "../icons/ProfileIcon";
import { useState } from "react";
import SidebarButton from "./SidebarButton";

function Sidebar() {
  const [active, setActive] = useState("home");
  return (
    <aside className="sidebar">
      <ul>
        <SidebarButton
          name="home"
          to={"/"}
          active={active}
          setActive={setActive}
        >
          <HomeIcon label="Home" active={active == "home"} />
        </SidebarButton>
        <SidebarButton
          name="profile"
          to={"/profile"}
          active={active}
          setActive={setActive}
        >
          <ProfileIcon label="Profile" active={active == "profile"} />
        </SidebarButton>
      </ul>
    </aside>
  );
}

export default Sidebar;
