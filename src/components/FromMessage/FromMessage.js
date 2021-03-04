import { Avatar } from "@material-ui/core";
import React from "react";
import { MessageLikeIcon, MoreIcon } from "../icons";
import "./FromMessage.css";
const FromMessage = ({ message }) => {
  return (
    <div className="fromMessage">
      <Avatar src="https://pbs.twimg.com/profile_images/1348390204810407937/BmUVaYGD_400x400.jpg" />
      <div>
        <span>{message}</span>
      </div>
      <MessageLikeIcon />
      <MoreIcon />
    </div>
  );
};

export default FromMessage;
