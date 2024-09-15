import "../AuthCss/Otp.css";
import OtpInput from "react-otp-input";
import logo from "../assets/CareVault.png";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useDispatch } from "react-redux";
import { appUser } from "../Global/slice";
import { useState } from "react";
import { MdCancel } from "react-icons/md";

export const Otp = () => {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  console.log(otp);
  const nav = useNavigate();
  const handleOtp = () => {
    if (!otp) {
      toast.error("please input otp");
    } else {
      setIsLoading(true);
      const url =
        "https://medical-record-project.onrender.com/api/v1/patient/verify-code";
      const data = { code: otp };
      axios
        .post(url, data)
        .then((res) => {
          setIsLoading(false);
          dispatch(appUser(res?.data?.user));
          nav("/dashBoard");
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(error);
        });
    }
  };
  return (
    <div className="otp-page">
      <ToastContainer />
      <div className="otp-wrapper">
        <div className="otp-header">
          <div className="company-logo">
            <img src={logo} alt="" />
          </div>
          <MdCancel size={30} cursor="pointer" onClick={() => nav("/")} />
        </div>
        <div className="otp-form">
          <div className="formText">
            <h2>Please check your email</h2>
            <p>
              We have sent a code to <br />
              {appUser.email} <br /> for verification
            </p>
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
                  style={{ width: "40px", marginInline: "5px" }}
                />
              )}
            />
          </div>

          <button className="btn1" onClick={handleOtp}>
            {isLoading ? "Loading..." : "Verify"}
          </button>
          <p>Send code again in 00.59</p>
        </div>
      </div>
    </div>
  );
};
