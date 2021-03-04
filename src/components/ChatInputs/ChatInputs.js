import React from "react";
import { EmojiIcon, GifIcon, PhotoIcon, SendIcon } from "../icons";
import "./ChatInputs.css";

const ChatInputs = () => {
  const [isFocus, setIsFocus] = React.useState(false);
  return (
    <div className="chatInputs">
      <PhotoIcon />
      <GifIcon />
      <div
        className={
          isFocus ? "chatTextInput chatTextInputFocus" : "chatTextInput"
        }
      >
        <input
          type="text"
          placeholder="Start a new message"
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
        <EmojiIcon />
      </div>
      <SendIcon />
    </div>
  );
};

export default ChatInputs;
