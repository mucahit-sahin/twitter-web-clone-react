import React from "react";
import "./Explore.css";
import FriendSuggestions from "../../components/Widgets/FriendSuggestions/FriendSuggestions";
import SearchInput from "../../components/Widgets/SearchInput/SearchInput";
import { SettingsIcon } from "../../components/icons";
import Topics from "../../components/Widgets/Topics/Topics";
import BottomSidebar from "../../components/BottomSidebar/BottomSidebar";
import Links from "../../components/Widgets/Links/Links";
import DrawerBar from "../../components/DrawerBar/DrawerBar";
import { Avatar } from "@material-ui/core";
import HomeBox from "../../components/HomeBox/HomeBox";
import Loading from "../../components/Loading/Loading";

function Explore() {
  const [isDrawerBar, setIsDrawerBar] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  document.title = "Explore / Twitter";
  return (
    <HomeBox>
      <div className="feed">
        {isDrawerBar && (
          <div
            onClick={() => setIsDrawerBar(false)}
            className="drawerBarPanel"
          />
        )}
        <DrawerBar active={isDrawerBar} />
        <div className="explore-header">
          <div onClick={() => setIsDrawerBar(true)}>
            <Avatar src="https://avatars.githubusercontent.com/u/38807255?s=460&u=deb087d587be7f6a4000e4e710ec4d1daa6fde84&v=4" />
          </div>
          <SearchInput placeholder="Search Twitter" />
          <SettingsIcon />
        </div>
        <div className="exploreContent">
          {loading ? <Loading /> : <Topics />}
        </div>
        <BottomSidebar />
      </div>
      <div className="widgets">
        <FriendSuggestions />
        <Links />
      </div>
    </HomeBox>
  );
}

export default Explore;
