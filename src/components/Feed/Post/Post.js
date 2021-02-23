import React from "react";
import { Avatar } from "@material-ui/core";
import "./Post.css";
import FavoriteIcon from "../../icons/FavoriteIcon";
import CommentIcon from "../../icons/CommentIcon";
import RetweetIcon from "../../icons/RetweetIcon";
import SharePostIcon from "../../icons/SharePostIcon";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { MillToDate } from "../../../utils/MillToDate";

function Post({ userimage, username, displayName, text, shareImage, date }) {
  console.log("cagirildim");
  return (
    <div className="post">
      <div>
        <Avatar src={userimage} />
      </div>
      <div className="post-content-col">
        <div className="post-header">
          <span className="post-header-displayname">{displayName}</span>
          <span className="post-header-username">{"@" + username}</span>
          <span className="post-header-date">{MillToDate(date)}</span>
          <MoreHorizIcon className="postMoreIcon" />
        </div>
        <div className="post-content">{text}</div>
        {shareImage && (
          <div className="post-image">
            <img src={shareImage} alt="shareimage" />
          </div>
        )}
        <div className="post-event">
          <div>
            <CommentIcon className="postIcon" />
          </div>
          <div>
            <FavoriteIcon className="postIcon" />
          </div>
          <div>
            <RetweetIcon className="postIcon" />
          </div>
          <div>
            <SharePostIcon className="postIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
