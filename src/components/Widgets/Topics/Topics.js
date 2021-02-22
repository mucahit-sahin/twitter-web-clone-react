import React from "react";
import "./Topics.css";
import SettingsIcon from "@material-ui/icons/Settings";
import TopicItem from "./TopicItem/TopicItem";

function Topics() {
  return (
    <div className="widgetsTopics">
      <div className="widgetsTopicsHeader">
        <span>Trends for you</span>
        <SettingsIcon />
      </div>
      <TopicItem
        category="Football · Trending"
        title="Fenerbahçe - Başakşehir"
        numberoftweet="13.1K"
      />
      <TopicItem
        category="Football · Trending"
        title="Fenerbahçe - Başakşehir"
        numberoftweet="13.1K"
      />
      <TopicItem
        category="Football · Trending"
        title="Fenerbahçe - Başakşehir"
        numberoftweet="13.1K"
      />
      <TopicItem
        category="Football · Trending"
        title="Fenerbahçe - Başakşehir"
        numberoftweet="13.1K"
      />
      <TopicItem
        category="Football · Trending"
        title="Fenerbahçe - Başakşehir"
        numberoftweet="13.1K"
      />

      <div className="widgetsTopicMore">
        <span>Show more</span>
      </div>
    </div>
  );
}

export default Topics;
