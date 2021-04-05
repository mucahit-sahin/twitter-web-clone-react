import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox/TweetBox";
import Post from "./Post/Post";
import HomeStars from "../icons/HomeStars";
import BottomSidebar from "../BottomSidebar/BottomSidebar";
import { Avatar } from "@material-ui/core";
import DrawerBar from "../DrawerBar/DrawerBar";
import Loading from "./Loading/Loading"
import usePosts from "../../lib/hooks/usePosts";


function Feed() {
  const [loading, posts, createPost] = usePosts();
  console.log({loading, posts});
  //const { posts } = useSelector((state) => state).posts;
  const [isDrawerBar, setIsDrawerBar] = React.useState(false);

  return (
    <section className="feed">
      {isDrawerBar && (
        <div onClick={() => setIsDrawerBar(false)} className="drawerBarPanel" />
      )}
      <DrawerBar active={isDrawerBar} />
      <div className="feed-header">
        <div onClick={() => setIsDrawerBar(true)}>
          <Avatar src="https://avatars.githubusercontent.com/u/38807255?s=460&u=deb087d587be7f6a4000e4e710ec4d1daa6fde84&v=4" />
        </div>
        <div className="feed-headerText">
          <span>Home</span>
        </div>
        <div className="homeStarsCol">
          <HomeStars className="homeStars" width={22} height={22} />
        </div>
      </div>
      <TweetBox createPost={createPost} />
      <article>
        {loading ? (
          <Loading />
        ) : posts.map((post) => (
          <Post
            key={post.id}
            username={post.username}
            userimage={post.userimage}
            date={post.date}
            displayName={post.displayName}
            text={post.text}
            shareImage={post.shareImage}
          />
        ))}
      </article>
      <BottomSidebar />
    </section>
  );
}

export default Feed;
