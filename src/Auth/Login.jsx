import "../AuthCss/Login.css";
import { useNavigate } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import logo from "../assets/CareVault.png";
import Button from "../Utils/Button/Button";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const Login = () => {
  const nav = useNavigate();
  const [showPassword, setShowPassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    passWord: "",
  });

  const validate = () => {
    const { email, passWord } = formData;
    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    // Validate password
    if (!passWord) {
      toast.error("Password is required.");
      return false;
    } else if (passWord.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      return false;
    } else if (
      !/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/.test(passWord)
    ) {
      toast.error(
        "Password must contain at least one number, one uppercase letter, one lowercase letter, and one special character."
      );
      return false;
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsLoading(true);
      const url =
        "https://medical-record-project.onrender.com/api/v1/patient/login";
      axios
        .post(url, formData)
        .then((res) => {
          setIsLoading(false);
          console.log(res);
          toast.success("Log in successful! Redirecting...");
          nav("/otp");
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
          toast.error("Incorrect user details. Please try again.");
        });
    }
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  //   console.log(formData);
  // };
  return (
    <div className="login-page">
      <div className="login-wrapper">
        <div className="login-header">
          <div className="company-logo">
            <img src={logo} alt="" />
          </div>
          <MdCancel size={30} cursor="pointer" onClick={() => nav("/")} />
        </div>
        <form action="" className="login-form" onSubmit={handleLogin}>
          <div className="formText">
            <h3>Welcome back</h3>
            <p>
              Log in to view, manage and access your secured medical information
              all the time
            </p>
          </div>
          <div className="login-input-div">
            <label htmlFor="email">
              <input
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                // onChange={handleChange}
                required
                className="custom-input"
              />
            </label>
            <label htmlFor="password" className="password-input">
              <div className="password-input-wrapper">
                <input
                  id="password"
                  type={showPassword ? "passWord" : "text"}
                  placeholder="Password"
                  name="passWord"
                  value={formData.passWord}
                  // onChange={handleChange}
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

            <span
              className="forgot-password"
              onClick={() => nav("/forgotpassword")}
            >
              Forgot Password?
            </span>
            <Button onClick={handleLogin}>Login</Button>
            <p>
              Dont have an account <span onClick={() => nav("/")}>Sign Up</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
