import "../AuthCss/ForgetPassword.css";
import { useNavigate } from "react-router-dom";

import logo from "../assets/CareVault.png";
import { toast, ToastContainer } from "react-toastify";
import { MdCancel } from "react-icons/md";
import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const nav = useNavigate();

  const handleResendPasssword = () => {
    console.log("Check your email");
  };

  const handleEmail = (event) => {
    const data = event.target.value;
    setEmail(data);

    if (data.trim() === "") {
      toast.error("email is required");
    }
  };
  return (
    <div className="forget-password-page">
      <ToastContainer />
      <section action="" className="forget-password-wrapper">
        <div className="forget-password-header">
          <div className="company-logo">
            <img src={logo} alt="" />
          </div>
          <MdCancel size={30} cursor="pointer" onClick={() => nav("/")} />
        </div>
        <form
          action=""
          className="forget-password-form"
          onSubmit={handleResendPasssword}
        >
          <div className="formText">
            <h3>Forgot password?</h3>
            <p>Please enter the email associated with you account.</p>
          </div>

          <label htmlFor="email">
            <input
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleEmail}
              value={email}
              required
              className="custom-input"
            />
          </label>

          <button className="btn1" onClick={handleResendPasssword}>
            Send code
          </button>
          <p>
            Remember password? <span onClick={() => nav("/login")}>Log in</span>
          </p>
        </form>
      </section>
    </div>
  );
};

export default ForgotPassword;
