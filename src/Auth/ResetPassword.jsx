import "../AuthCss/ResetPassword.css";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash, FaXmark } from "react-icons/fa6";
import logo from "../assets/CareVault.png";
import { useState } from "react";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(true);
  const nav = useNavigate();
  return (
    <section className="reset-password-page">
      <div className="reset-password-wrapper">
        <div className="reset-password-header">
          <img src={logo} alt="CareVault Logo" />
          <FaXmark
            size={30}
            onClick={() => nav("/")}
            style={{ cursor: "pointer" }}
          />
        </div>
        <form className="reset-password-form">
          <div className="formText">
            <h2>Reset Password?</h2>
            <p>Create a new secured password</p>
          </div>
          <label htmlFor="password" className="password-input">
            <div className="password-input-wrapper">
              <input
                id="password"
                type={showPassword ? "passWord" : "text"}
                placeholder="Password"
                name="passWord"
                //   value={formData.passWord}
                //   onChange={handleChange}
                required
                className="custom-input"
              />
              {showPassword ? (
                <FaRegEyeSlash
                  onClick={() => setShowPassword(false)}
                  className="password-icon"
                />
              ) : (
                <FaRegEye
                  onClick={() => setShowPassword(true)}
                  className="password-icon"
                />
              )}
            </div>
          </label>
          <label htmlFor="password" className="password-input">
            <div className="password-input-wrapper">
              <input
                id="password"
                type={showPassword ? "passWord" : "text"}
                placeholder="Confirm password"
                name="passWord"
                //   value={formData.passWord}
                //   onChange={handleChange}
                required
                className="custom-input"
              />
              {showPassword ? (
                <FaRegEyeSlash
                  onClick={() => setShowPassword(false)}
                  className="password-icon"
                />
              ) : (
                <FaRegEye
                  onClick={() => setShowPassword(true)}
                  className="password-icon"
                />
              )}
            </div>
          </label>
          <button className="btn1 reset" onClick={() => nav("/successpage")}>
            Reset Password
          </button>
        </form>
      </div>
    </section>
  );
};

export default ResetPassword;
