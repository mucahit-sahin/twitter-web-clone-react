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
      />
      <Post
        username="mucahitsah"
        userimage={ProfilePhoto}
        displayName="Mücahit Şahin"
        text="balık etinin bağ dokuları, diğer etlere göre daha gevşektir. bu özellik, balığın hemen pişmesini ve fazla pişirildiğinde suyunun kaçmasına neden olur. tabii burada balığın yağ durumun önemlidir. yağlı balıkları ızgara ya da tavada pişirmeye gerek yoktur. barbun, tekir, mezgit gibi balıklar daha çok tavada kızartmaya uygun balıklar. fakat pandemi sebebiyle mangal ya da park - bahçe imkanı kısıtlı olduğu için evinizde koku istemiyor ve balıktan maksimum verim almak istiyorsanız uyguladığım bir yöntemi paylaşıyorum. genel olarak çipura ve levreği bu yöntemle yaparım.
        "
      />
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
        text="Merhaba bu ilk tweetim"
      />
      <Post
        username="mucahitsah"
        userimage={ProfilePhoto}
        displayName="Mücahit Şahin"
        text="balık etinin bağ dokuları, diğer etlere göre daha gevşektir. bu özellik, balığın hemen pişmesini ve fazla pişirildiğinde suyunun kaçmasına neden olur. tabii burada balığın yağ durumun önemlidir. yağlı balıkları ızgara ya da tavada pişirmeye gerek yoktur. barbun, tekir, mezgit gibi balıklar daha çok tavada kızartmaya uygun balıklar. fakat pandemi sebebiyle mangal ya da park - bahçe imkanı kısıtlı olduğu için evinizde koku istemiyor ve balıktan maksimum verim almak istiyorsanız uyguladığım bir yöntemi paylaşıyorum. genel olarak çipura ve levreği bu yöntemle yaparım.
        "
      />
      <Post
        username="mucahitsah"
        userimage={ProfilePhoto}
        displayName="Mücahit Şahin"
        text="balık etinin bağ dokuları, diğer etlere göre daha gevşektir. bu özellik, balığın hemen pişmesini ve fazla pişirildiğinde suyunun kaçmasına neden olur. tabii burada balığın yağ durumun önemlidir. yağlı balıkları ızgara ya da tavada pişirmeye gerek yoktur. barbun, tekir, mezgit gibi balıklar daha çok tavada kızartmaya uygun balıklar. fakat pandemi sebebiyle mangal ya da park - bahçe imkanı kısıtlı olduğu için evinizde koku istemiyor ve balıktan maksimum verim almak istiyorsanız uyguladığım bir yöntemi paylaşıyorum. genel olarak çipura ve levreği bu yöntemle yaparım.
        "
      />
    </div>
  );
}

export default Feed;
