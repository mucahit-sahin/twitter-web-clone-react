import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { addMessageAction } from "../../store/actions/messagesActions";
import { EmojiIcon, GifIcon, PhotoIcon, SendIcon } from "../icons";
import "./ChatInputs.css";

const ChatInputs = () => {
  var fromto = useLocation().pathname.split("/")[2];
  const [isFocus, setIsFocus] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const dispatch = useDispatch();
  const sendMessage = () => {
    if (fromto !== "" && message !== "") {
      dispatch(addMessageAction(message, fromto));
      setMessage("");
    }
  };
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
          onKeyDown={(e) => {
            e.key === "Enter" && sendMessage();
          }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <EmojiIcon />
      </div>
      <div onClick={() => sendMessage()}>
        <SendIcon />
      </div>
    </div>
  );
};

export default ChatInputs;
