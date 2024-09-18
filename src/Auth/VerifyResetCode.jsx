// import "../AuthCss/Otp.css";  
// import OtpInput from "react-otp-input";  
// import logo from "../assets/CareVault.png";  
// import { useNavigate } from "react-router-dom";  
// import { toast, ToastContainer } from "react-toastify";  
// import axios from "axios";  
// import { useDispatch } from "react-redux";  
// import { appUser } from "../Global/slice";  
// import { useState } from "react";  
// import { MdCancel } from "react-icons/md";  

// export const VerifyResetCode = () => {  
//   const [otp, setOtp] = useState("");  
//   const [isLoading, setIsLoading] = useState(false);   
//   const nav = useNavigate();  

//   const handleOtp = async () => {  
//     // Log the OTP input  
//     console.log("Current OTP:", otp);  
    
//     // Validate the OTP input  
//     if (!otp || otp.length < 6) {  // Assuming the OTP should be at least 6 digits  
//       toast.error("Please input a valid OTP");  
//       return;  
//     }  
    
//     setIsLoading(true);  
    
//     const url = "https://medical-record-project.onrender.com/api/v1/verify-reset-code";  
//     const data = { code: otp };  
    
//     // Log the data being sent  
//     console.log("Data being sent to API:", data);  
    
//     try {  
//       const res = await axios.post(url, data);  
//       console.log("API Response:", res);  
      
//       if (res.data.user) {  
//         dispatch(appUser(res.data.user));  
//         nav("/resetpassword");  
//       } else {  
//         toast.error("Invalid OTP or user not found");  
//       }  
//     } catch (error) {  
//       console.error("Error on OTP Verification:", error.response?.data || error);  
//       toast.error(error.response?.data?.message || "An error occurred. Please try again.");  
//     } finally {  
//       setIsLoading(false);  
//     }  
//   };


//   return (  
//     <div className="otp-page">  
//       <ToastContainer />  
//       <div className="otp-wrapper">  
//         <div className="otp-header">  
//           <div className="company-logo">  
//             <img src={logo} alt="" />  
//           </div>  
//           <MdCancel size={30} cursor="pointer" onClick={() => nav("/")} />  
//         </div>  
//         <div className="otp-form">  
//           <div className="formText">  
//             <h2>Please check your email</h2>  
//             <p>  
//               We have sent a code to <br />  
//               {appUser.email} <br />  
//               to reset your password  
//             </p>  
//           </div>  
//           <div className="otp-container">  
//             <OtpInput  
//               className="input"  
//               value={otp}  
//               onChange={setOtp}  
//               numInputs={6}  
//               renderInput={(props) => (  
//                 <input  
//                   {...props}  
//                   className="otp-input"  
//                   style={{ width: "40px", marginInline: "5px" }}  
//                 />  
//               )}  
//             />  
//           </div>  

//           <button className="btn1" onClick={handleOtp}>  
//             {isLoading ? "Loading..." : "Verify"}  
//           </button>  
//           <p>Send code again in 00.59</p>  
//         </div>  
//       </div>  
//     </div>  
//   );  
// };

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

export const VerifyResetCode = () => {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  console.log(otp);
  const nav = useNavigate();
  const handleReset = () => {
    if (!otp) {
      toast.error("please input otp");
    } else {
      setIsLoading(true);
      const url =
        "https://medical-record-project.onrender.com/api/v1/verify-reset-code";
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
          toast.error(error.response.data.message);
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
              {appUser.email} <br /> reset of your password
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

          <button className="btn1" onClick={handleReset}>
            {isLoading ? "Loading..." : "Verify"}
          </button>
          {/* <p>Send code again in 00.59</p> */}
        </div>
      </div>
    </div>
  );
};
