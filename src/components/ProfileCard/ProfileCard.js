import { Avatar } from "@material-ui/core";
import React from "react";
import { VerifiedIcon } from "../icons";
import "./ProfileCard.css";

const ProfileCard = ({ active }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <div
      className={
        active || isVisible ? "profileDetailCard" : "profileDetailCardActive"
      }
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div>
        <Avatar src="https://avatars2.githubusercontent.com/u/38807255?s=460&u=deb087d587be7f6a4000e4e710ec4d1daa6fde84&v=4" />
        <div>
          <span>Follow</span>
        </div>
      </div>
      <div>
        <span>Mücahit Şahin</span>
        <VerifiedIcon />
      </div>
      <div>
        <span>@mucahitsahin6</span>
      </div>
      <div>
        <span>Junior Software Developer</span>
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
    </div>
  );
};

export default ProfileCard;
