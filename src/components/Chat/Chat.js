import { Avatar } from "@material-ui/core";
import React from "react";
import ChatInputs from "../ChatInputs/ChatInputs";
import FromMessage from "../FromMessage/FromMessage";
import { InfoIcon, CalenderIcon } from "../icons";
import MyMessage from "../MyMessage/MyMessage";
import "./Chat.css";
const Chat = () => {
  return (
    <div className="chat">
      <div className="chatHeader">
        <Avatar src="https://avatars2.githubusercontent.com/u/38807255?s=460&u=deb087d587be7f6a4000e4e710ec4d1daa6fde84&v=4" />
        <div>
          <span>Mücahit Şahin</span>
          <span>@mucahitsah</span>
        </div>
        <InfoIcon />
      </div>
      <div className="chatRoom">
        <div className="chatInfo">
          <div>
            <span>Mücahit Şahin</span>
            <span>@mucahitsah</span>
          </div>
          <span>Junior Software Developer</span>
          <div>
            <span>
              <span>167</span>
              <span>Following</span>
            </span>
            <span>
              <span>167</span>
              <span>Followers</span>
            </span>
          </div>
          <span>
            <CalenderIcon />
            Joined December 2011
          </span>
        </div>
        <div className="chatMessages">
          <FromMessage />
          <MyMessage />
          <FromMessage />
          <MyMessage />
          <FromMessage />
          <MyMessage />
          <FromMessage />
          <MyMessage />
          <FromMessage />
          <MyMessage />
          <FromMessage />
          <MyMessage />
          <FromMessage />
          <MyMessage />
          <FromMessage />
          <MyMessage />
          <ChatInputs />
        </div>
      </div>
    </div>
  );
};

export default Chat;
