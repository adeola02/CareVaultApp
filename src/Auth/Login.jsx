import "../AuthCss/Login.css";
import { useNavigate } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import logo from "../assets/CareVault.png";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useDispatch } from "react-redux";
import { appUser } from "../Global/slice";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Login = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [showPassword, setShowPassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");

  const handleEmail = (event) => {
    const data = event.target.value;
    setEmail(data);

    if (data.trim() === "") {
      toast.error("email is required");
    }
    // else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data)){
    //   toast.error("invalid email format")
    // }
  };
  const handlePassWord = (event) => {
    const data = event.target.value;
    setPassWord(data);

    if (data.trim() === "") {
      toast.error("password is required");
    }
  };

  console.log(passWord);
  const handleLogin = (event) => {
    event.preventDefault();
    if (!email || !passWord) {
      toast.error("input all datas");
    } else {
      setIsLoading(true);
      const data = { email, passWord };
      const url =
        "https://medical-record-project.onrender.com/api/v1/patient/login";
      axios
        .post(url, data)
        .then((res) => {
          setIsLoading(false);
          console.log(res);
          // console.log(res?.data?.data?.user);
          nav("/otp");
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
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
      <ToastContainer />
      <section action="" className="login-wrapper">
        <div className="login-header">
          <div className="company-logo">
            <img src={logo} alt="" />
          </div>
          <FaXmark
            size={30}
            onClick={() => nav("/")}
            style={{ cursor: "pointer" }}
          />
        </div>
        <form action="" className="login-form" onSubmit={handleLogin}>
          <div className="formText">
            <h3>Welcome back</h3>
            <p>
              Log in to view, manage and access your secured medical information
              all the time
            </p>
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
          <label htmlFor="password" className="password-input">
            <div className="password-input-wrapper">
              <input
                id="password"
                type={showPassword ? "passWord" : "text"}
                placeholder="Password"
                name="passWord"
                onChange={handlePassWord}
                value={passWord}
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
            style={{ cursor: "pointer" }}
          >
            Forgot Password?
          </span>
          <button className="btn1" onClick={handleLogin}>
            {isLoading ? "loading..." : "Login"}
          </button>
          <p>
            Dont have an account{" "}
            <span
              className="dont-have-an-acc"
              onClick={() => nav("/sign-up")}
              style={{ cursor: "pointer", color: "#5f9eeb", fontWeight: "600" }}
            >
              Sign Up
            </span>
          </p>
        </form>
      </section>
    </div>
  );
};

export default Login;
