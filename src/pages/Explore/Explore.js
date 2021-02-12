import React from "react";
import "./Explore.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import FriendSuggestions from "../../components/Widgets/FriendSuggestions/FriendSuggestions";
import SearchInput from "../../components/Widgets/SearchInput/SearchInput";
import SettingsIcon from "@material-ui/icons/Settings";
import Topics from "../../components/Widgets/Topics/Topics";

function Explore() {
  return (
    <div className="homeContainer">
      <div className="home">
        <Sidebar />
        <div className="feed">
          <div className="exploreSearch">
            <SearchInput />
            <SettingsIcon />
          </div>
          <Topics />
        </div>
        <div className="widgets">
          <FriendSuggestions />
        </div>
      </div>
    </div>
  );
}

export default Explore;
