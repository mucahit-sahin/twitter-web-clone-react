import { Avatar } from "@material-ui/core";
import React from "react";
import BottomSidebar from "../../components/BottomSidebar/BottomSidebar";
import Chat from "../../components/Chat/Chat";
import DrawerBar from "../../components/DrawerBar/DrawerBar";
import { MessagesIcon } from "../../components/icons";
import LastChat from "../../components/LastChat/LastChat";
import Sidebar from "../../components/Sidebar/Sidebar";
import SearchInput from "../../components/Widgets/SearchInput/SearchInput";
import "./Messages.css";

const Messages = () => {
  const [isDrawerBar, setIsDrawerBar] = React.useState(false);
  document.title = "Messages / Twitter";
  return (
    <div className="home">
      <Sidebar />
      <div className="messages">
        {isDrawerBar && (
          <>
            <div
              onClick={() => setIsDrawerBar(false)}
              className="drawerBarPanel"
            />
            <DrawerBar />
          </>
        )}
        <div className="messagesHeader">
          <div onClick={() => setIsDrawerBar(true)}>
            <Avatar src="https://avatars.githubusercontent.com/u/38807255?s=460&u=deb087d587be7f6a4000e4e710ec4d1daa6fde84&v=4" />
          </div>
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
            userimage="https://pbs.twimg.com/profile_images/1348390204810407937/BmUVaYGD_400x400.jpg"
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
      <Chat />
    </div>
  );
};

export default Messages;
