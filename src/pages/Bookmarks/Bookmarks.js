import React from "react";
import HomeBox from "../../components/HomeBox/HomeBox";
import Widgets from "../../components/Widgets/Widgets";
import "./Bookmarks.css";

const Bookmarks = () => {
  return (
    <HomeBox>
      <div className="feed">
        <span>Bookmarks</span>
      </div>
      <Widgets />
    </HomeBox>
  );
};

export default Bookmarks;
