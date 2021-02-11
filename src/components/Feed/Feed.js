import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox/TweetBox";
import Post from "./Post/Post";
import ProfilePhoto from "../../assets/profile.png";
import HomeStars from "../icons/HomeStars";

function Feed() {
  return (
    <div className="feed">
      <div className="feed-header">
        <div className="feed-headerText">
          <span>Home</span>
        </div>
        <div className="homeStarsCol">
          <HomeStars className="homeStars" width={22} height={22} />
        </div>
      </div>
      <TweetBox />
      <Post
        username="mucahitsah"
        userimage={ProfilePhoto}
        displayName="Mücahit Şahin"
        text="Merhaba bu ilk tweetim"
        shareImage="https://www.webtekno.com/images/editor/default/0002/100/5ef88e5ff724d9853a14c6d624720c31f4ae6dda.jpeg"
      />
      <Post
        username="mucahitsah"
        userimage={ProfilePhoto}
        displayName="Mücahit Şahin"
        text="Projelerime github.com/mucahit-sahin adresinden ulaşabilirsiniz"
      />
      <Post
        username="mucahitsah"
        userimage={ProfilePhoto}
        displayName="Mücahit Şahin"
        text="Linkedin hesabıma linkedin.com/in/mucahit-sahin/ adresinden ulaşabilirsiniz."
      />
      <Post
        username="mucahitsah"
        userimage={ProfilePhoto}
        displayName="Mücahit Şahin"
        text="Merhaba bu ilk tweetim"
      />
      <Post
        username="mucahitsah"
        userimage={ProfilePhoto}
        displayName="Mücahit Şahin"
        text="Bu proje React ile gerçekleştirilmiştir."
        shareImage="https://miro.medium.com/proxy/1*vHHBwcUFUaHWXntSnqKdCA.png"
      />
    </div>
  );
}

export default Feed;
