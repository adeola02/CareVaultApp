import "../AuthCss/ForgetPassword.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/CareVault.png";
import { toast, ToastContainer } from "react-toastify";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const nav = useNavigate();

  const handleResendPassword = async (event) => {
    event.preventDefault();

    if (!email.trim()) {
      toast.error("Email is required");
      return;
    }

    setIsLoading(true); // Set loading to true

    try {
      const response = await axios.post(
        "https://medical-record-project.onrender.com/api/v1/forgotPassword",
        {
          email, // Send the email as payload
        }
      );

      if (response.status === 200) {
        toast.success(
          "Password reset instructions have been sent to your email."
        );
        nav("/verifyresetcode");
      }
      console.log(response)
    }
     catch (error) {
      console.error("Error occurred during password reset:", error);
      if (error.response && error.response.data) {
        toast.error(
          error.response.data.message || "Failed to send reset instructions."
        );
      } else {
        toast.error("An error occurred. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmail = (event) => {
    const data = event.target.value;
    setEmail(data);
  };

  return (
    <div className="forget-password-page">
      <ToastContainer />
      <section className="forget-password-wrapper">
        <div className="forget-password-header">
          <div className="company-logo">
            <img src={logo} alt="" />
          </div>
          <FaXmark
            size={30}
            onClick={() => nav("/")}
            style={{ cursor: "pointer" }}
          />
        </div>
        <form className="forget-password-form" onSubmit={handleResendPassword}>
          <div className="formText">
            <h3>Forgot password?</h3>
            <p>Please enter the email associated with your account.</p>
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

          <button type="submit" className="btn1" disabled={isLoading}>
            {isLoading ? "Loading..." : "Send code"}
          </button>
          <p>
            Remember password?{" "}
            <span
              onClick={() => nav("/log-in")}
              style={{ cursor: "pointer", color: "#5f9eeb", fontWeight: "600" }}
            >
              Log in
            </span>
          </p>
        </form>
      </section>
    </div>
  );
};

export default ForgotPassword;
