import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/icons/Logo";
import TextInput from "../../components/TextInput/TextInput";
import "./Login.css";

function Login() {
  return (
    <div className="container">
      <div className="panel">
        <div className="panelHeader">
          <Logo width={39} fill="white" />
          <span className="panelHeaderText">Twitter'a giriş yap</span>
        </div>
        <div className="inputs">
          <TextInput text="Telefon, e-posta veya kullanıcı ad" />
          <TextInput text="Password" />
        </div>
        <Link to="/home" className="loginBtn">
          <span className="loginText">Giriş yap</span>
        </Link>
        <div className="loginLinks">
          <a href="">
            <span className="link">Şifreni mi unuttun?</span>
          </a>
          <span className="point">.</span>
          <a href="">
            <span className="link">Twitter'a kaydol</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
