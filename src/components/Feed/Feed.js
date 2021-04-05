import React, { useEffect, useState } from "react";
import firebase from "../../lib/firebase";
import "./Feed.css";
import TweetBox from "./TweetBox/TweetBox";
import Post from "./Post/Post";
import HomeStars from "../icons/HomeStars";
import BottomSidebar from "../BottomSidebar/BottomSidebar";
import { Avatar } from "@material-ui/core";
import DrawerBar from "../DrawerBar/DrawerBar";

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const createPost = ({
    id = Date.now(),
    username,
    displayName,
    userimage,
    text,
    sharedImage = "",
    date = new Date().getTime(),
  }) => {
    firebase.firestore().collection("posts")
      .add({
        id,
        username,
        displayName,
        userimage,
        text,
        sharedImage,
        date
      })
  }

  useEffect(() => {
    console.log("Listening")
    firebase.firestore().collection("posts")
      .onSnapshot(async (querySnapshot) => {
        const allPosts = []
        await querySnapshot.forEach((doc) => {
          allPosts.push(doc.data())
        });
        await setPosts(allPosts);
        return setLoading(false)

      });
  }, []);

  return [loading, posts, createPost];
}

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
        {posts.map((post) => (
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
