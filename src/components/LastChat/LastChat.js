import { Avatar } from "@material-ui/core";
import React from "react";
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
    <div className="lastChat">
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
    </div>
  );
};

export default LastChat;
