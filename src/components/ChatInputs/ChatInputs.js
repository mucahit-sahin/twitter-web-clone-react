import React from "react";
import { EmojiIcon, GifIcon, PhotoIcon, SendIcon } from "../icons";
import "./ChatInputs.css";

const ChatInputs = () => {
  return (
    <div className="chatInputs">
      <PhotoIcon />
      <GifIcon />
      <div className="chatTextInput">
        <input type="text" placeholder="Start a new message" />
        <EmojiIcon />
      </div>
      <SendIcon />
    </div>
  );
};

export default ChatInputs;
