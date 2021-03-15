import React from "react";
import "./Topics.css";
import TopicItem from "./TopicItem/TopicItem";
import { SettingsIcon } from "../../icons/index";

function Topics() {
  return (
    <div className="widgetsTopics">
      <div className="widgetsTopicsHeader">
        <span>Trends for you</span>
        <SettingsIcon />
      </div>
      <TopicItem
        category="Programming · Trending"
        title="React"
        numberoftweet="13.1K"
      />
      <TopicItem
        category="Programming · Trending"
        title="React Native"
        numberoftweet="13.1K"
      />
      <TopicItem
        category="Programming · Trending"
        title="Javascript"
        numberoftweet="13.1K"
      />
      <TopicItem
        category="Programming · Trending"
        title="CSS"
        numberoftweet="13.1K"
      />
      <TopicItem
        category="Programming · Trending"
        title="HTML"
        numberoftweet="13.1K"
      />

      <div className="widgetsTopicMore">
        <span>Show more</span>
      </div>
    </div>
  );
}

export default Topics;
