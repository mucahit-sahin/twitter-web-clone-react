import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Widgets from "../../components/Widgets/Widgets";
import "./Lists.css";
const Lists = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="feed">
        <span>Bookmarks</span>
      </div>
      <Widgets />
    </div>
  );
};

export default Lists;
