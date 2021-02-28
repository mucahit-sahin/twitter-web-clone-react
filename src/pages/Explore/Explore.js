import React from "react";
import "./Explore.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import FriendSuggestions from "../../components/Widgets/FriendSuggestions/FriendSuggestions";
import SearchInput from "../../components/Widgets/SearchInput/SearchInput";
import SettingsIcon from "@material-ui/icons/Settings";
import Topics from "../../components/Widgets/Topics/Topics";
import BottomSidebar from "../../components/BottomSidebar/BottomSidebar";
import Links from "../../components/Widgets/Links/Links";

function Explore() {
  return (
    <div className="home">
      <Sidebar />
      <div className="feed">
        <div className="exploreSearch">
          <SearchInput placeholder="Search Twitter" />
          <SettingsIcon />
        </div>
        <Topics />
        <BottomSidebar />
      </div>
      <div className="widgets">
        <FriendSuggestions />
        <Links />
      </div>
    </div>
  );
}

export default Explore;
