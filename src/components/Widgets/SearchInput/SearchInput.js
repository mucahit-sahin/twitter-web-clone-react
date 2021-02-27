import React from "react";
import "./SearchInput.css";

import SearchIcon from "@material-ui/icons/Search";
function SearchInput({ placeholder }) {
  return (
    <div className="widgetsSearch">
      <SearchIcon className="widgetsSearchIcon" />
      <input
        className="widgetsSearchInput"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}

export default SearchInput;
