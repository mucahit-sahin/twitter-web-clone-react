import React from "react";
import {
  AnalyticsIcon,
  DisplayIcon,
  HelpIcon,
  MomentsIcon,
  NewslettersIcon,
  SettingsIcon,
  TopicsIcon,
} from "../icons";
import "./MoreMenu.css";
import MoreMenuItem from "./MoreMenuItem/MoreMenuItem";
const MoreMenu = ({ active }) => {
  return (
    <div className={active ? "moreMenu" : "unVisible"}>
      <MoreMenuItem title="Topics" Icon={TopicsIcon} />
      <MoreMenuItem title="Moments" Icon={MomentsIcon} />
      <MoreMenuItem title="Newsletters" Icon={NewslettersIcon} />
      <MoreMenuItem title="Twitter Ads" Icon={TopicsIcon} />
      <MoreMenuItem title="Analytics" Icon={AnalyticsIcon} />
      <MoreMenuItem title="Settings and privacy" Icon={SettingsIcon} />
      <MoreMenuItem title="Help Center" Icon={HelpIcon} />
      <MoreMenuItem title="Display" Icon={DisplayIcon} />
      <MoreMenuItem title="Keyboard shortcuts" Icon={TopicsIcon} />
    </div>
  );
};

export default MoreMenu;
