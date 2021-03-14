import React from "react";
import "./BlueButton.css";

const BlueButton = (props) => {
  return (
    <div className="blueButton " {...props}>
      <span>{props.text}</span>
    </div>
  );
};

export default BlueButton;
