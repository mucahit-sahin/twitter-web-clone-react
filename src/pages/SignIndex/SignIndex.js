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
          <div className="infoSearchRow">
            <SearchIcon width={23} stroke="white" fill="white" />
            <span className="infoText"> İlgi alanlarını takip et.</span>
          </div>
          <div className="infoUsersRow">
            <UsersIcon width={23} stroke="white" fill="white" />
            <span className="infoText">
              İnsanların neler hakkında konuştuğuna kulak ver.
            </span>
          </div>
          <div className="infoChatRow">
            <ChatIcon width={23} stroke="white" fill="white" />
            <span className="infoText"> Sohbete katıl.</span>
          </div>
        </div>
      </div>
      <div className="col2">
        <div className="menu">
          <Logo width={30} fill="white" />
          <span className="header">Dünyada şu anda olup bitenleri gör</span>
          <div className="joinRow">
            <span className="join">Twitter'a bugün katıl.</span>
          </div>
          <div className="buttons">
            <Link to="/signup" className="signup">
              <div className="signupItem">
                <span className="signupText">Üye ol</span>
              </div>
            </Link>
            <Link to="/login" className="login">
              <div className="loginItem">
                <span className="loginText">Giriş yap</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIndex;
