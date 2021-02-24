import React from "react";
import "./Profile.css";
import BottomSidebar from "../../components/BottomSidebar/BottomSidebar";
import Sidebar from "../../components/Sidebar/Sidebar";
import FriendSuggestions from "../../components/Widgets/FriendSuggestions/FriendSuggestions";
import Topics from "../../components/Widgets/Topics/Topics";
import SearchInput from "../../components/Widgets/SearchInput/SearchInput";
import Post from "../../components/Feed/Post/Post";

import BackIcon from "@material-ui/icons/KeyboardBackspace";
import ScheduleIcon from "@material-ui/icons/CalendarToday";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";

const Profile = () => {
  const [category, setCategory] = React.useState(1);
  const posts = useSelector((state) => state.posts);
  document.title = "Mücahit Şahin (@mucahitsahin6) / Twitter";
  return (
    <div className="homeContainer">
      <div className="home">
        <Sidebar />
        <section className="feed">
          <div className="profileHeader">
            <BackIcon />
            <div>
              <span>Mücahit Şahin</span>
              <span>12 Tweets</span>
            </div>
          </div>
          <div className="profile">
            <div className="backgroundImage"></div>
            <div className="profileTitle">
              <div className="profileImage">
                <Avatar src="https://pbs.twimg.com/profile_images/1325847629192957952/v3xrjDtd_200x200.jpg" />
              </div>
              <div className="editProfile">
                <span>Edit Profile</span>
              </div>
            </div>
            <div className="profileBiography">
              <span>Mücahit Şahin</span>
              <span>@Mucahitsahin6</span>
              <span>Junior Software Developer</span>
              <span>
                <ScheduleIcon />
                Joined December 2011
              </span>
            </div>
            <div>
              <span>
                <span>167</span>
                <span>Following</span>
              </span>
              <span>
                <span>167</span>
                <span>Followers</span>
              </span>
            </div>
            <div className="profileCategory">
              <div
                className={category == 1 && "profileCategoryActive"}
                onClick={() => setCategory(1)}
              >
                <span>Tweets</span>
              </div>
              <div
                className={category == 2 && "profileCategoryActive"}
                onClick={() => setCategory(2)}
              >
                <span>Tweets & replies</span>
              </div>
              <div
                className={category == 3 && "profileCategoryActive"}
                onClick={() => setCategory(3)}
              >
                <span>Media</span>
              </div>
              <div
                className={category == 4 && "profileCategoryActive"}
                onClick={() => setCategory(4)}
              >
                <span>Likes</span>
              </div>
            </div>
          </div>
          <article className="profilePosts">
            {posts.map((post) => (
              <Post
                key={post.id}
                username={post.username}
                userimage={post.userimage}
                date={post.date}
                displayName={post.displayName}
                text={post.text}
              />
            ))}
          </article>
          <BottomSidebar />
        </section>
        <div className="widgets">
          <SearchInput />
          <FriendSuggestions />
          <Topics />
        </div>
      </div>
    </div>
  );
};

export default Profile;
