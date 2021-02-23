import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox/TweetBox";
import Post from "./Post/Post";
import HomeStars from "../icons/HomeStars";
import BottomSidebar from "../BottomSidebar/BottomSidebar";
import { useSelector } from "react-redux";

function Feed() {
  const posts = useSelector((state) => state.posts);
  return (
    <section className="feed">
      <div className="feed-header">
        <div className="feed-headerText">
          <span>Home</span>
        </div>
        <div className="homeStarsCol">
          <HomeStars className="homeStars" width={22} height={22} />
        </div>
      </div>
      <TweetBox />
      <article>
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
  );
}

export default Feed;
