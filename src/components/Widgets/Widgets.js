import React from "react";
import "./Widgets.css";
import SearchInput from "./SearchInput/SearchInput";
import Topics from "./Topics/Topics";

function Widgets() {
  return (
    <div className="widgets">
      <SearchInput />
      <Topics />
    </div>
  );
}

export default Widgets;
