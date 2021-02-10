import React from "react";
import "./FriendSuggestions.css";
import FriendSuggestionItem from "./FriendSuggestionItem/FriendSuggestionItem";

function FriendSuggestions() {
  return (
    <div className="friendSuggestions">
      <div className="friendSuggestionsHeader">
        <span>Who to follow</span>
      </div>
      <FriendSuggestionItem
        username="code"
        displayName="Visual Studio Code"
        image="https://pbs.twimg.com/profile_images/1278357302601347072/BGZIBPH9_200x200.jpg"
      />
      <FriendSuggestionItem
        username="gitHub"
        displayName="GitHub"
        image="https://pbs.twimg.com/profile_images/1338344493234286592/C_ujKIUa_200x200.png"
      />
      <FriendSuggestionItem
        username="nodejs"
        displayName="Node.js"
        image="https://pbs.twimg.com/profile_images/1262824892535373825/BiXDFDDp_200x200.jpg"
      />
      <div className="widgetsTopicMore">
        <span>Show more</span>
      </div>
    </div>
  );
}

export default FriendSuggestions;
