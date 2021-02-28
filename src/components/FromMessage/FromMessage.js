import { Avatar } from "@material-ui/core";
import React from "react";
import { MessageLikeIcon, MoreIcon } from "../icons";
import "./FromMessage.css";
const FromMessage = () => {
  return (
    <div className="fromMessage">
      <Avatar src="https://pbs.twimg.com/profile_images/1325847629192957952/v3xrjDtd_200x200.jpg" />
      <div>
        <span>Mesaj</span>
      </div>
      <MessageLikeIcon />
      <MoreIcon />
    </div>
  );
};

export default FromMessage;
