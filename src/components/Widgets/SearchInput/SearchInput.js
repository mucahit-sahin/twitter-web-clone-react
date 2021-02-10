import React from "react";
import "./SearchInput.css";

import SearchIcon from "@material-ui/icons/Search";
function SearchInput() {
  return (
    <div className="widgetsSearch">
      <SearchIcon className="widgetsSearchIcon" />
      <input
        className="widgetsSearchInput"
        type="text"
        placeholder="Search Twitter"
      />
    </div>
  );
}

export default SearchInput;
