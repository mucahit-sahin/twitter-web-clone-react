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
        <Avatar src="https://pbs.twimg.com/profile_images/1348390204810407937/BmUVaYGD_400x400.jpg" />
        <div>
          <span>Cihat Necati</span>
          <span>@cnecati</span>
        </div>
        <InfoIcon />
      </div>
      <div className="chatRoom">
        <div className="chatInfo">
          <div>
            <span>Cihat Necati</span>
            <span>@cnecati</span>
          </div>
          <span>Türk dili ve edebiyatı</span>
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
          <FromMessage message="merhaba" />
          <MyMessage message="merhaba" />
          <FromMessage message="merhaba" />
          <MyMessage message="merhaba" />
          <FromMessage message="merhaba" />
          <MyMessage message="merhaba" />
          <FromMessage message="merhaba" />
          <MyMessage message="merhaba" />
          <FromMessage message="merhaba" />
          <MyMessage message="merhaba" />
          <FromMessage message="iyi akşamlar" />
        </div>
        <ChatInputs />
      </div>
    </div>
  );
};

export default Chat;
