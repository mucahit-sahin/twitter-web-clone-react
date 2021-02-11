import React from "react";
import Feed from "../../components/Feed/Feed";
import Sidebar from "../../components/Sidebar/Sidebar";
import Widgets from "../../components/Widgets/Widgets";
import "./Home.css";
function Home() {
  return (
    <div className="homeContainer">
      <div className="home">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default Home;
