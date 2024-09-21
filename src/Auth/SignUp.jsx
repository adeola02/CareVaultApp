import "../AuthCss/Sign.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash, FaXmark } from "react-icons/fa6";
import logo from "../assets/CareVault.png";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { userInfo } from "../Global/slice";

const SignUp = () => {
  const nav = useNavigate();
  const [showPassword, setShowPassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // State for the checkbox
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    passWord: "",
    dateOfBirth: "",
    gender: "",
  });

  const validate = () => {
    const { fullName, passWord, email, dateOfBirth, gender, phoneNumber } =
      formData;

    if (!fullName) {
      toast.error("Full name is required.");
      return false;
    }

    if (!phoneNumber) {
      toast.error("Phone number is required.");
      return false;
    } else if (!/^\d{11}$/.test(phoneNumber)) {
      toast.error("Phone number must be exactly 11 digits.");
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    const dob = new Date(dateOfBirth);
    const age = new Date().getFullYear() - dob.getFullYear();
    if (age < 18 || age > 60) {
      toast.error("You must be between 18 and 60 years old.");
      return false;
    }

    if (!gender) {
      toast.error("Gender is required.");
      return false;
    }

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

    if (!isTermsChecked) {
      toast.error("You must agree to the terms and conditions.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsLoading(true);
      const url =
        "https://medical-record-project.onrender.com/api/v1/patient/signup";
      axios
        .post(url, formData)
        .then((res) => {
          // dispatch(userInfo(res?.data?.data))
          nav("/verification")
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          toast.error(err.response.data);
         
        });
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setIsTermsChecked(checked); // Manage checkbox state
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <section className="signup-page">
      <ToastContainer />
      <div className="signup-wrapper">
        <div className="signup-header">
          <img src={logo} alt="CareVault Logo" />
          <FaXmark
            size={30}
            onClick={() => nav("/")}
            style={{ cursor: "pointer" }}
          />
        </div>
        <section className="signup-form">
          <div className="formText">
            <h2>Sign Up</h2>
            <p>
              Join CareVault, experience the benefit of a personalized medical
              record platform.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="custom-input"
              />
            </label>
            <label htmlFor="tel">
              <input
                id="tel"
                placeholder="Phone Number"
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="custom-input"
              />
            </label>

            <label htmlFor="email">
              <input
                id="email"
                type="email"
                placeholder="E-mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="custom-input"
              />
            </label>
            <div className="date-gender">
              <label htmlFor="dob">
                <input
                  id="dob"
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                />
              </label>
              <label htmlFor="gender">
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  style={{ color: "black" }}
                >
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </label>
            </div>
            <label htmlFor="password" className="password-input">
              <div className="password-input-wrapper">
                <input
                  id="password"
                  type={showPassword ? "password" : "text"}
                  placeholder="Password"
                  name="passWord"
                  value={formData.passWord}
                  onChange={handleChange}
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
              <div className="errorDiv">
                <small>
                  password must contain uppercase, lowercase, number & special
                  character
                </small>
              </div>
            </label>
            <div className="terms-wrapper">
              <input
                type="checkbox"
                id="terms"
                checked={isTermsChecked}
                onChange={handleChange}
                required
                style={{ cursor: "pointer" }}
              />
              <span>
                I agree to the terms & conditions set out by this site
              </span>
            </div>

            <button type="submit" className="btn1">
              {isLoading ? "Loading..." : "Sign Up"}
            </button>
            <p>
              Already have an account?
              <span
                className="dont-have-an-acc"
                onClick={() => nav("/log-in")}
                style={{
                  cursor: "pointer",
                  color: "#5f9eeb",
                  fontWeight: "600",
                }}
              >
                Log in
              </span>
            </p>
          </form>
        </section>
      </div>
    </section>
  );
};

export default SignUp;
