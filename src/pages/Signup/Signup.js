import React from "react";
import "./Signup.css";
import Logo from "../../components/icons/Logo";
import { Link } from "react-router-dom";
import TextInput from "../../components/TextInput/TextInput";

function Signup() {
  return (
    <div className="signUpContainer">
      <div className="card">
        <div className="signuplogo">
          <Logo width={26} height={53} fill="white" />
        </div>
        <div className="signupHeader">
          <span>Create your account</span>
        </div>
        <TextInput text="Name" />
        <TextInput text="Email" />
        <TextInput text="Date of Birth" />
        <div className="acceptTerm">
          <span>
            When you register, you agree to the
            <span className="acceptTermBlue"> terms of service</span> and the
            <span className="acceptTermBlue"> Privacy Policy</span>, including
            the use of <span className="acceptTermBlue">cookies</span>. When you
            set your
            <span className="acceptTermBlue"> privacy options </span>
            accordingly, others can find you by email or phone number.
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
