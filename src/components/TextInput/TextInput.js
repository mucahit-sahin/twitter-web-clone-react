import React from "react";
import "./TextInput.css";

function TextInput({ text }) {
  const [clicked, setClicked] = React.useState(false);
  const [inputFocus, setInputFocus] = React.useState(false);
  const [value, setValue] = React.useState("");
  function isValueSet() {
    if (value === "") {
      setClicked(false);
    } else {
      setClicked(true);
    }
    setInputFocus(false);
  }
  return (
    <div
      className={
        inputFocus ? "textInputRow textInputRowActive" : "textInputRow"
      }
    >
      <label
        for={text}
        className={
          clicked ? "textInputLabel textInputLabelActive" : "textInputLabel"
        }
      >
        {text}
      </label>
      <input
        type="text"
        className="textInput"
        id={text}
        name={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => {
          setInputFocus(true);
          setClicked(true);
        }}
        onBlur={() => isValueSet()}
      />
    </div>
  );
}

export default TextInput;
