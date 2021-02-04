import React from "react";
import "./Sidebar.css";
import SidebarItem from "./SidebarItem/SidebarItem";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MessageIcon from "@material-ui/icons/Message";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ListIcon from "@material-ui/icons/List";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="twitter-icon" />
      <SidebarItem active text="Home" Icon={HomeIcon} />
      <SidebarItem text="Notifications" Icon={NotificationsIcon} />
      <SidebarItem text="Messages" Icon={MessageIcon} />
      <SidebarItem text="Bookmarks" Icon={BookmarkIcon} />
      <SidebarItem text="Lists" Icon={ListIcon} />
      <SidebarItem text="Profile" Icon={AccountCircleIcon} />
      <SidebarItem text="More" Icon={MoreHorizIcon} />
      <div className="tweetButton">
        <span>Tweetle</span>
      </div>
      <div className="profileCard">
        <div className="profileCardImage">
          <AccountCircleIcon />
        </div>
        <div className="profileCardNameCol">
          <div className="profileCardNameColName">
            <span>Mücahit Şahin</span>
          </div>
          <div className="profileCardNameColuserName">
            <span>@Mucahitsahin6</span>
          </div>
        </div>
        <div className="profileCardIcon">
          <MoreHorizIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
