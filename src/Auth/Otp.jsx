import React, { useState } from "react";
import "../AuthCss/Otp.css";
import OtpInput from "react-otp-input";

import logo from "../assets/CareVault.png";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

export const Otp = () => {
  const [otp, setOtp] = useState("");
  const [isLoading,setIsLoading]=useState(false);
  console.log(otp);
  const nav = useNavigate();
  const handleOtp = () => {
    if (!otp) {
      toast.error("please input otp");
    } else {
      setIsLoading(true)
      const url =
        "https://medical-record-project.onrender.com/api/v1/patient/verify-code";
      const data = { code: otp };
      axios.post(url, data)
      .then((res)=>{
          setIsLoading(false);
          console.log(res)
          nav("/dashBoard")
      })
      .catch((error)=>{
        setIsLoading(false);
        console.log(error);
      })
    }
  };
  return (
    <div className="otp">
      <ToastContainer />
      <div className="otp-form">
        <div className="company-logo">
          <img src={logo} alt="" />
        </div>
        <div className="otpHeaderText">
          <h2>Please check your email</h2>
          <p>Enter the code sent to your email for verification</p>
        </div>
        <div className="otp-container">
          <OtpInput
            className="input"
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderInput={(props) => (
              <input
                {...props}
                className="otp-input"
                style={{ width: "3rem" }}
              />
            )}
          />
        </div>
        <div className="btn">
          <button
            style={{
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={handleOtp}
          >
            {isLoading ? "Loading...":"Verify"}
          </button>
          <p>Send code again in 00.59</p>
        </div>
      </div>
    </div>
  );
};
