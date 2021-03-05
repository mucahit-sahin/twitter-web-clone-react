import React from "react";
import { MessageLikeIcon, MoreIcon } from "../icons";
import "./MyMessage.css";

const MyMessage = ({ message }) => {
  return (
    <div className="myMessage">
      <MessageLikeIcon />
      <MoreIcon />
      <div>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default MyMessage;
