import React from "react";
import "./WidgetSearch.css";

import SearchIcon from "@material-ui/icons/Search";
function WidgetSearch() {
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

export default WidgetSearch;
