import { Avatar } from "@material-ui/core";
import React from "react";
import {
  AddIcon,
  AnalyticsIcon,
  BookmarkIcon,
  DataSaverIcon,
  DisplayIcon,
  HelpIcon,
  KeyboardShortcutsIcon,
  ListIcon,
  MomentsIcon,
  NewslettersIcon,
  SettingsIcon,
  TopicsIcon,
  TwitterAdsIcon,
  UserIcon,
} from "../icons";
import MoreMenuItem from "../MoreMenu/MoreMenuItem/MoreMenuItem";
import "./DrawerBar.css";
const DrawerBar = () => {
  return (
    <div className="drawerBar">
      <div className="drawerBarHeader">
        <span>Account Info</span>
        <span>X</span>
      </div>
      <div className="draweBarScroll">
        <div className="drawerBarProfile">
          <div>
            <Avatar src="https://avatars.githubusercontent.com/u/38807255?s=460&u=deb087d587be7f6a4000e4e710ec4d1daa6fde84&v=4" />
            <AddIcon />
          </div>
          <span>Mücahit Şahin</span>
          <span>@mucahitsahin6</span>
          <div>
            <span>
              <span>167</span>
              <span>Following</span>
            </span>
            <span>
              <span>167</span>
              <span>Followers</span>
            </span>
          </div>
        </div>
        <MoreMenuItem title="Profile" Icon={UserIcon} />
        <MoreMenuItem title="Lists" Icon={ListIcon} />
        <MoreMenuItem title="Topics" Icon={TopicsIcon} />
        <MoreMenuItem title="Bookmarks" Icon={BookmarkIcon} />
        <MoreMenuItem title="Moments" Icon={MomentsIcon} />
        <MoreMenuItem title="Newsletters" Icon={NewslettersIcon} />
        <MoreMenuItem title="Twitter Ads" Icon={TwitterAdsIcon} />
        <MoreMenuItem title="Analytics" Icon={AnalyticsIcon} />
        <MoreMenuItem title="Settings and privacy" Icon={SettingsIcon} />
        <MoreMenuItem title="Help Center" Icon={HelpIcon} />
        <MoreMenuItem title="Data saver" Icon={DataSaverIcon} />
        <MoreMenuItem title="Display" Icon={DisplayIcon} />
        <MoreMenuItem title="Keyboard Shortcuts" Icon={KeyboardShortcutsIcon} />
        <MoreMenuItem title="Logout" Icon={DisplayIcon} />
      </div>
    </div>
  );
};

export default DrawerBar;
