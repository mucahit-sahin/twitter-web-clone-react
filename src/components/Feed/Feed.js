import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox/TweetBox";
import Post from "./Post/Post";
import ProfilePhoto from "../../assets/profile.png";
import HomeStars from "../icons/HomeStars";

function Feed() {
  return (
    <div className="feed">
      <div className="feed-header">
        <div className="feed-headerText">
          <span>Home</span>
        </div>
        <div className="homeStarsCol">
          <HomeStars className="homeStars" width={22} height={22} />
        </div>
      </div>
      <TweetBox />
    </div>
  );
}

export default Feed;
