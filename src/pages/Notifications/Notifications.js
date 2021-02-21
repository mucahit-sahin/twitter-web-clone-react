import React from "react";
import "./Notifications.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Widgets from "../../components/Widgets/Widgets";
import SettingsIcon from "@material-ui/icons/Settings";
import Post from "../../components/Feed/Post/Post";
import FollowedYou from "../../components/FollowedYou/FollowedYou";
import LikedYou from "../../components/LikedYou/LikedYou";

function Notifications() {
  const [isAll, setIsAll] = React.useState(true);
  document.title = "Notifications / Twitter";
  return (
    <div className="homeContainer">
      <div className="home">
        <Sidebar />
        <div className="feed">
          <div className="notificationsHeader">
            <div className="notificationsTitle">
              <span>Notifications</span>
              <SettingsIcon />
            </div>
            <div className="notificationsCategory">
              <div
                className={isAll && "notificationActive"}
                onClick={() => setIsAll(true)}
              >
                <span>All</span>
              </div>
              <div
                className={!isAll && "notificationActive"}
                onClick={() => setIsAll(false)}
              >
                <span>Mentions</span>
              </div>
            </div>
          </div>
          {isAll ? (
            <>
              <FollowedYou
                followingUser={{
                  userImage:
                    "https://pbs.twimg.com/profile_images/1348390204810407937/BmUVaYGD_400x400.jpg",
                  displayName: "Cihat Necati",
                }}
              />
              <LikedYou
                likePost={{
                  id: 1,
                  likeUser: [
                    {
                      displayName: "C Necati",
                      userImage:
                        "https://pbs.twimg.com/profile_images/1348390204810407937/BmUVaYGD_400x400.jpg",
                    },
                    {
                      displayName: "Mehmet",
                      userImage:
                        "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
                    },
                    {
                      displayName: "Code",
                      userImage:
                        "https://pbs.twimg.com/profile_images/1278357302601347072/BGZIBPH9_200x200.jpg",
                    },
                  ],
                  post: "Bu tweeti beğenin.",
                }}
              />
              <Post
                username="cnecati"
                userimage="https://pbs.twimg.com/profile_images/1348390204810407937/BmUVaYGD_400x400.jpg"
                displayName="Cihat Necati"
                text="@mucahitsahin Projelerine github.com/mucahit-sahin adresinden ulaşabilirsiniz"
              />
            </>
          ) : (
            <>
              <Post
                username="cnecati"
                userimage="https://pbs.twimg.com/profile_images/1348390204810407937/BmUVaYGD_400x400.jpg"
                displayName="Cihat Necati"
                text="@mucahitsahin Projelerine github.com/mucahit-sahin adresinden ulaşabilirsiniz"
              />
            </>
          )}
        </div>
        <Widgets />
      </div>
    </div>
  );
}

export default Notifications;
