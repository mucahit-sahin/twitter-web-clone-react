import React from "react";
import Logo from "../../components/icons/Logo";
import "./style.css";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [buttonColor, setButtonColor] = React.useState(false);

  React.useEffect(() => {
    if (email.toString() !== "" && password.toString() !== "") {
      setButtonColor(true);
    } else {
      setButtonColor(false);
    }
  }, [email, password]);
  return (
    <div className="container">
      <div className="panel">
        <div className="panelHeader">
          <Logo width={39} fill="white" />
          <span className="panelHeaderText">Twitter'a giriş yap</span>
        </div>
        <div className="inputRow">
          <input
            type="text"
            className="input"
            id="email"
            onChange={(text) => setEmail(text)}
          />
          <label for="email" className="label">
            Email
          </label>
        </div>
        <div className="inputRow">
          <input
            type="text"
            className="input"
            id="sifre"
            onChange={(text) => setPassword(text)}
          />
          <label for="sifre" className="label">
            Şifre
          </label>
        </div>
        <div
          className="loginBtn"
          style={buttonColor ? { opacity: 1 } : { opacity: 0.5 }}
        >
          <span className="loginText">Giriş yap</span>
        </div>
        <div className="links">
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
