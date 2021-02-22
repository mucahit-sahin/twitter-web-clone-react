import React from "react";
import "./TopicItem.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const TopicItem = ({ category, title, numberoftweet }) => {
  return (
    <div className="widgetsTopicsItem">
      <div className="widgetsTopicCategory">
        <span>{category}</span>
        <MoreHorizIcon />
      </div>
      <span className="widgetsTopicTitle">#{title}</span>
      <span className="widgetsTopicCount">{numberoftweet} Tweets</span>
    </div>
  );
};

export default TopicItem;
