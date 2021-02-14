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
import ExploreIcon from "../icons/ExploreIcon";
import SetTweetIcon from "../icons/SetTweetIcon";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="twitter-icon" />
      <Link to="/home" style={{ textDecoration: "none" }}>
        <SidebarItem active text="Home" Icon={HomeIcon} />
      </Link>
      <Link to="/explore" style={{ textDecoration: "none" }}>
        <SidebarItem text="Explore" Icon={ExploreIcon} />
      </Link>
      <Link to="/Notifications" style={{ textDecoration: "none" }}>
        <SidebarItem text="Notifications" Icon={NotificationsIcon} />
      </Link>
      <SidebarItem text="Messages" Icon={MessageIcon} />
      <SidebarItem text="Bookmarks" Icon={BookmarkIcon} />
      <SidebarItem text="Lists" Icon={ListIcon} />
      <SidebarItem text="Profile" Icon={AccountCircleIcon} />
      <SidebarItem text="More" Icon={MoreHorizIcon} />
      <div className="tweetButton">
        <SetTweetIcon className="setTweetIcon" />
        <span>Tweetle</span>
      </div>
      <div className="profileCard">
        <div className="profileCardImage">
          <Avatar src="https://avatars2.githubusercontent.com/u/38807255?s=460&u=deb087d587be7f6a4000e4e710ec4d1daa6fde84&v=4" />
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
