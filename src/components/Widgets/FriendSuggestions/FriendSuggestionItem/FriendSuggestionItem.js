import { Avatar } from "@material-ui/core";
import React from "react";
import "./FriendSuggestionItem.css";

function FriendSuggestionItem({ image, displayName, username }) {
  return (
    <div className="friendSuggestionsItem">
      <div className="friendSuggestionImage">
        <Avatar src={image} />
      </div>
      <div className="profileCardNameCol">
        <div className="profileCardNameColName">
          <span>{displayName}</span>
        </div>
        <div className="profileCardNameColuserName">
          <span>@{username}</span>
        </div>
      </div>
      <div className="friendFollowButton">
        <span>Follow</span>
      </div>
    </div>
  );
}

export default FriendSuggestionItem;
