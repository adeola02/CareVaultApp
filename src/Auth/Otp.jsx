import "../AuthCss/Otp.css";
import OtpInput from "react-otp-input";
import logo from "../assets/CareVault.png";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { appUser, setToken } from "../Global/slice";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";

export const Otp = () => {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const id=useSelector((state)=>state.app?.user?._id)
  const user = useSelector((state) => state.app?.user);

  console.log(user)
  console.log(id)

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
          console.log(res);
          dispatch(appUser(res?.data?.user));
          dispatch(setToken(res?.data?.user?.token));
          console.log(res?.data?.user?.isAdmin);
          if (res?.data?.user?.isAdmin) {
            nav("/adminDashBoard");
          } else {
            nav("/dashBoard");
          }
        })
        .catch((error) => {
          setIsLoading(false);
          toast.error(error.response.data.message);
        });
    }
  };

  const getOneUser=()=>{
    const url=`https://medical-record-project.onrender.com/api/v1/patient/${id}`
  }
  return (
    <div className="otp-page">
      <ToastContainer />
      <div className="otp-wrapper">
        <div className="otp-header">
          <div className="company-logo">
            <img src={logo} alt="" />
          </div>
          <FaXmark
            size={30}
            onClick={() => nav("/")}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="otp-form">
          <div className="formText">
            <h2>Please check your email</h2>
            <p>
              We have sent a code to <br />
              your email <br /> for verification
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
          {/* <p>Send code again in 00.59</p> */}
        </div>
      </div>
    </div>
  );
};
