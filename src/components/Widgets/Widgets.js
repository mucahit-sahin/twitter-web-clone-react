import React from "react";
import "./Widgets.css";
import SearchInput from "./SearchInput/SearchInput";
import Topics from "./Topics/Topics";
import FriendSuggestions from "./FriendSuggestions/FriendSuggestions";

function Widgets() {
  return (
    <div className="widgets">
      <SearchInput placeholder="Search Twitter" />
      <Topics />
      <FriendSuggestions />
    </div>
  );
}

export default Widgets;
