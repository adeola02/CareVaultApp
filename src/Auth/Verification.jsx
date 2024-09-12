import React from "react";
import "../AuthCss/Verification.css";
import logo from "../assets/CareVault.png";

const Verification = () => {
  return (
    <div className="Verification">
      <div className="Verification-form">
        <div className="company-logo">
          <img src={logo} alt="" />
        </div>
        <div className="verification-text">
          <h3>Dear,Mustapha Sheu</h3>
          <p>Welcome to CareVault</p>
        </div>
      </div>
    </div>
  );
};

export default Verification;
