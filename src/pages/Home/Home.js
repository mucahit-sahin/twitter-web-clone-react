import React from "react";
import Feed from "../../components/Feed/Feed";
import HomeBox from "../../components/HomeBox/HomeBox";
import Widgets from "../../components/Widgets/Widgets";
function Home() {
  return (
    <HomeBox>
      <Feed />
      <Widgets />
    </HomeBox>
  );
}

export default Home;
