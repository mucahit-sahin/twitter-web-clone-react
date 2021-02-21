import React from "react";
import "./LikedYou.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Avatar } from "@material-ui/core";

const LikedYou = ({ likePost }) => {
  return (
    <div className="likedYou">
      <FavoriteIcon />
      <div>
        <div>
          {likePost.likeUser.map((user) => (
            <Avatar src={user.userImage} />
          ))}
        </div>
        <span>
          <b>{likePost.likeUser[0].displayName}</b> and{" "}
          {likePost.likeUser.length - 1} others liked your reply
        </span>
        <span>{likePost.post}</span>
      </div>
    </div>
  );
};

export default LikedYou;
