import React from "react";
import BottomSidebar from "../../components/BottomSidebar/BottomSidebar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Widgets from "../../components/Widgets/Widgets";
import "./Messages.css";

const Messages = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="feed">
        <span>Messages</span>
        <BottomSidebar />
      </div>
      <Widgets />
    </div>
  );
};

export default Messages;
