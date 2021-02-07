import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import PhotoIcon from "../../icons/PhotoIcon";
import GifIcon from "../../icons/GifIcon";
import SurveyIcon from "../../icons/SurveyIcon";
import EmojiIcon from "../../icons/EmojiIcon";
import PlanIcon from "../../icons/PlanIcon";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");

  return (
    <div className="tweetbox">
      <div className="tweetboxRow">
        <div className="tweetboxUserIcon">
          <Avatar src="https://avatars2.githubusercontent.com/u/38807255?s=460&u=deb087d587be7f6a4000e4e710ec4d1daa6fde84&v=4" />
        </div>
        <div className="tweetbox-input-row">
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            className="tweetbox-input"
            placeholder="What's happening?"
            type="text"
          />
        </div>
      </div>
      <div className="tweetboxRow">
        <div style={{ flex: 0.1 }}></div>
        <div className="tweetboxOptions">
          <PhotoIcon className="tweetboxOptionIcon" width={22} height={22} />
          <GifIcon className="tweetboxOptionIcon" width={22} height={22} />
          <SurveyIcon className="tweetboxOptionIcon" width={22} height={22} />
          <EmojiIcon className="tweetboxOptionIcon" width={22} height={22} />
          <PlanIcon className="tweetboxOptionIcon" width={22} height={22} />
          <div className="tweetbox-button">
            <span>Tweetle</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetBox;
