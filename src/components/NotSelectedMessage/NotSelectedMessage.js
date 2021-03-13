import React from "react";
import BlueButton from "../BlueButton/BlueButton";
import "./NotSelectedMessage.css";
const NotSelectedMessage = () => {
  return (
    <div className="notSelectedMessage">
      <span>You don’t have a message selected</span>
      <span>Choose one from your existing messages, or start a new one.</span>
      <BlueButton text="New Message" />
    </div>
  );
};

export default NotSelectedMessage;
