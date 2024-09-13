import React from "react";
import "../AuthCss/Verification.css";
import logo from "../assets/CareVault.png";
import { useNavigate } from "react-router-dom";

const Verification = () => {
  const nav=useNavigate();
  return (
    <div className="Verification">
      <div className="Verification-form">
        <div className="company-logo">
          <img src={logo} alt="" />
        </div>
        <div className="verification-text">
          <h3>Dear,Mustapha Sheu</h3>
          <p>Welcome to CareVault  your CareVault account has been successfully created.Please check your email to verify(mustapha shue)to verify</p>
        </div>
        <button onClick={()=>nav("/log-in")}>verify</button>
      </div>
    </div>
  );
};

export default Verification;
