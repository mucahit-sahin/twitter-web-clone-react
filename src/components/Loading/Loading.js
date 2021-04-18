import React from "react";
import loadingGif from "../../assets/loading.gif";
import "./Loading.css";
const Loading = () => {
  return (
    <div className="loading">
      <img src={loadingGif} alt="loading" />
    </div>
  );
};

export default Loading;
