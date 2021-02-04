import React from "react";
import "./Signup.css";
import Logo from "../../components/icons/Logo";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="signUpContainer">
      <div className="card">
        <div className="signuplogo">
          <Logo width={26} height={53} fill="white" />
        </div>
        <div className="signupHeader">
          <span>Hesabını oluştur</span>
        </div>
        <div className="signupInputRow">
          <input type="text" className="signupInput" id="name" />
          <label for="name" className="signupLabel">
            İsim
          </label>
        </div>
        <div className="signupInputRow">
          <input type="text" className="signupInput" id="email" />
          <label for="email" className="signupLabel">
            Email
          </label>
        </div>
        <div className="signupInputRow">
          <input type="text" className="signupInput" id="dateofbirth" />
          <label for="dateofbirth" className="signupLabel">
            Doğum Tarihi
          </label>
        </div>
        <div className="acceptTerm">
          <span>
            Kaydolduğunda
            <span className="acceptTermBlue"> Hizmet Şartları'nı </span>
            ve <span className="acceptTermBlue"> Çerez Kullanımı</span> dahil
            olmak üzere
            <span className="acceptTermBlue"> Gizlilik Politikası'nı </span>
            kabul etmiş olursun.
            <span className="acceptTermBlue">Gizlilik Seçeneklerini </span>
            buna göre belirlediğinde başkaları seni e-postan veya telefon
            numaranla bulabilir.
          </span>
        </div>
        <Link to="/home" className="signupBtn">
          <span className="signupText">Kaydol</span>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
