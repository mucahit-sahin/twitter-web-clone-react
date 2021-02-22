import React from "react";
import "./BottomSidebar.css";
import { Link, useLocation } from "react-router-dom";
import SidebarItem from "../Sidebar/SidebarItem/SidebarItem";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MessageIcon from "@material-ui/icons/Message";
import ExploreIcon from "../icons/ExploreIcon";

const BottomSidebar = () => {
  const [location, setLocation] = React.useState(useLocation().pathname);
  return (
    <footer className="bottomSidebar">
      <div>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <SidebarItem
            text="Home"
            Icon={HomeIcon}
            active={location == "/home" && true}
          />
        </Link>
      </div>
      <div>
        <Link to="/explore" style={{ textDecoration: "none" }}>
          <SidebarItem
            text="Explore"
            Icon={ExploreIcon}
            active={location == "/explore" && true}
          />
        </Link>
      </div>
      <div>
        <Link to="/Notifications" style={{ textDecoration: "none" }}>
          <SidebarItem
            text="Notifications"
            Icon={NotificationsIcon}
            active={location == "/Notifications" && true}
          />
        </Link>
      </div>
      <div>
        <Link to="/Messages" style={{ textDecoration: "none" }}>
          <SidebarItem
            text="Messages"
            Icon={MessageIcon}
            active={location == "/Messages" && true}
          />
        </Link>
      </div>
    </footer>
  );
};

export default BottomSidebar;
