import React from "react";
import { Link } from "react-router-dom";
import ChatIcon from "../../components/icons/ChatIcon";
import Logo from "../../components/icons/Logo";
import SearchIcon from "../../components/icons/SearchIcon";
import UsersIcon from "../../components/icons/UsersIcon";
import "./SignIndex.css";

function SignIndex() {
  return (
    <div className="container">
      <div className="col1">
        <div className="logo">
          <Logo />
        </div>
        <div className="info">
          <div>
            <span>
              <SearchIcon className="indexIcon" /> Follow your interests.
            </span>
          </div>
          <div>
            <span>
              <UsersIcon className="indexIcon" />
              Hear what people are talking about.
            </span>
          </div>
          <div>
            <span>
              <ChatIcon className="indexIcon" /> Join to conversation.
            </span>
          </div>
        </div>
      </div>
      <div className="col2">
        <div className="menu">
          <Logo width={30} fill="white" />
          <span className="header">
            See what's happening in the world right now
          </span>
          <span className="join">Join Twitter today.</span>
          <div className="buttons">
            <Link to="/signup" className="signup">
              <div className="signupItem">
                <span className="signupText">Sign Up</span>
              </div>
            </Link>
            <Link to="/login" className="login">
              <div className="loginItem">
                <span className="loginText">Login</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIndex;
