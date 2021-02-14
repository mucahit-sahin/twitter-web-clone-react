import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Widgets from "../../components/Widgets/Widgets";
import "./Notifications.css";

function Notifications() {
  return (
    <div className="homeContainer">
      <div className="home">
        <Sidebar />
        <div className="feed">
          <span>Notifications</span>
        </div>
        <Widgets />
      </div>
    </div>
  );
}

export default Notifications;
