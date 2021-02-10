import React from "react";
import "./Topics.css";
import SettingsIcon from "@material-ui/icons/Settings";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Topics() {
  return (
    <div className="widgetsTopics">
      <div className="widgetsTopicsHeader">
        <span>Trends for you</span>
        <SettingsIcon />
      </div>
      <div className="widgetsTopicsItem">
        <div className="widgetsTopicCategory">
          <span>Football · Trending</span>
          <MoreHorizIcon />
        </div>
        <span className="widgetsTopicTitle">#Fenerbahçe - Başakşehir</span>
        <span className="widgetsTopicCount">13.1K Tweets</span>
      </div>
      <div className="widgetsTopicsItem">
        <div className="widgetsTopicCategory">
          <span>Football · Trending</span>
          <MoreHorizIcon />
        </div>
        <span className="widgetsTopicTitle">#Fenerbahçe - Başakşehir</span>
        <span className="widgetsTopicCount">13.1K Tweets</span>
      </div>
      <div className="widgetsTopicsItem">
        <div className="widgetsTopicCategory">
          <span>Football · Trending</span>
          <MoreHorizIcon />
        </div>
        <span className="widgetsTopicTitle">#Fenerbahçe - Başakşehir</span>
        <span className="widgetsTopicCount">13.1K Tweets</span>
      </div>
      <div className="widgetsTopicsItem">
        <div className="widgetsTopicCategory">
          <span>Football · Trending</span>
          <MoreHorizIcon />
        </div>
        <span className="widgetsTopicTitle">#Fenerbahçe - Başakşehir</span>
        <span className="widgetsTopicCount">13.1K Tweets</span>
      </div>
      <div className="widgetsTopicsItem">
        <div className="widgetsTopicCategory">
          <span>Football · Trending</span>
          <MoreHorizIcon />
        </div>
        <span className="widgetsTopicTitle">#Fenerbahçe - Başakşehir</span>
        <span className="widgetsTopicCount">13.1K Tweets</span>
      </div>
      <div className="widgetsTopicMore">
        <span>Show more</span>
      </div>
    </div>
  );
}

export default Topics;
