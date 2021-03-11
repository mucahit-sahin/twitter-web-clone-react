import { Avatar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { VerifiedIcon } from "../icons";
import "./LastChat.css";

const LastChat = ({
  displayName,
  username,
  userimage,
  datetime,
  lastMessage,
  verified,
}) => {
  return (
    <Link className="lastChat" to={`/Messages/mucahitsahin6-${username}`}>
      <div>
        <Avatar src={userimage} />
      </div>
      <div>
        <div>
          <span>
            {displayName}
            {verified && <VerifiedIcon />}
          </span>
          <span>@{username}</span>
          <span>{datetime}</span>
        </div>
        <span>{lastMessage}</span>
      </div>
    </Link>
  );
};

export default LastChat;
