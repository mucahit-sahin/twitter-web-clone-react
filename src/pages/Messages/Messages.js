import React from "react";
import BottomSidebar from "../../components/BottomSidebar/BottomSidebar";
import { MessagesIcon } from "../../components/icons";
import LastChat from "../../components/LastChat/LastChat";
import Sidebar from "../../components/Sidebar/Sidebar";
import SearchInput from "../../components/Widgets/SearchInput/SearchInput";
import "./Messages.css";

const Messages = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="messages">
        <div className="messagesHeader">
          <span>Messages</span>
          <MessagesIcon />
        </div>
        <div className="messagesSearchInput">
          <SearchInput placeholder="Search for people and groups" />
        </div>
        <div className="lastMessages">
          <LastChat
            username="cnecati"
            displayName="Cihat Necati"
            datetime="July 18 2019"
            userimage="https://pbs.twimg.com/profile_images/1325847629192957952/v3xrjDtd_200x200.jpg"
            lastMessage="İyi Akşamlar"
            verified={true}
          />
          <LastChat
            username="yasin"
            displayName="Yasin"
            datetime="May 18 2020"
            userimage="https://i.ytimg.com/vi/eV4fMfIjTZ0/maxresdefault.jpg"
            lastMessage="Görüşürüz"
          />
        </div>
        <BottomSidebar />
      </div>
    </div>
  );
};

export default Messages;
