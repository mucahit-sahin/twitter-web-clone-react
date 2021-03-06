import React from "react";
import HomeBox from "../../components/HomeBox/HomeBox";
import Widgets from "../../components/Widgets/Widgets";
import "./Lists.css";
const Lists = () => {
  return (
    <HomeBox>
      <div className="feed">
        <span>Bookmarks</span>
      </div>
      <Widgets />
    </HomeBox>
  );
};

export default Lists;
