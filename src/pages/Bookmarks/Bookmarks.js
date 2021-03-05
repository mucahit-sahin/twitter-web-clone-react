import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Widgets from "../../components/Widgets/Widgets";
import "./Bookmarks.css";

const Bookmarks = () => {
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

export default Bookmarks;
