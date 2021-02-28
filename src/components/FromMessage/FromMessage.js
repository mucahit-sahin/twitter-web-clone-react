import { Avatar } from "@material-ui/core";
import React from "react";
import { MessageLikeIcon, MoreIcon } from "../icons";
import "./FromMessage.css";
const FromMessage = () => {
  return (
    <div className="fromMessage">
      <Avatar src="https://avatars.githubusercontent.com/u/38807255?s=460&u=deb087d587be7f6a4000e4e710ec4d1daa6fde84&v=4" />
      <div>
        <span>Mesaj</span>
      </div>
      <MessageLikeIcon />
      <MoreIcon />
    </div>
  );
};

export default FromMessage;
