import { Avatar } from "@material-ui/core";
import React from "react";
import { MessageLikeIcon, MoreIcon } from "../icons";
import "./MyMessage.css";

const MyMessage = () => {
  return (
    <div className="myMessage">
      <MessageLikeIcon />
      <MoreIcon />
      <div>
        <span>Mesaj</span>
      </div>
    </div>
  );
};

export default MyMessage;
